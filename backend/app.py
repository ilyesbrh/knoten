

from flask import Flask, jsonify, request, json, Response
from flask_pymongo import PyMongo
from flask_cors import CORS
from flask_restful import Resource, Api


app = Flask(__name__)
app.config['MONGO_DBNAME'] = 'knoten'
app.config['MONGO_URI'] = 'mongodb://admin1:test123@ds239578.mlab.com:39578/knoten?retryWrites=false'

CORS(app)

mongo = PyMongo(app)
api = Api(app)


def userResp(data):
    return {
        'first_name': data['first_name'],
        'last_name': data['last_name'],
        'email': data['email'],
        'password': data['password'],
        'fields': data["fields"],
        'about': data['about'],
        'projects': data['projects'],
        'stars': data['stars'],
        'invitations': data['invitations']
    }


def userList(ul):
    return [userResp(i) for i in ul]


def projResp(data):
    return {
        "title": data['title'],
        "creator": data['creator'],
        "description": data['description'],
        "etat": data['etat'],
        "fields": data['fields'],
        "member": data['member'],
        "request": data['request']
    }


def projList(pl):
    return [projResp(p) for p in pl]


class login(Resource):
    def get(self):
        users = mongo.db.users
        email = request.get_json()['email']
        password = request.get_json()['password']
        result = ""
        resp = users.find_one({'email': email})
        if resp:
            if users.find_one({'email': email})['password'] == password:
                return jsonify({'result': 'sucess', 'user': userResp(resp)})
        return jsonify({'result': "failed"})


class signUp(Resource):
    def post(self):
        print("ahhhhhhh")
        user = mongo.db.users
        first_name = request.get_json()['first_name']
        last_name = request.get_json()['last_name']
        email = request.get_json()['email']
        password = request.get_json()['password']
        fields = request.get_json()['fields']
        about = request.get_json()['about']
        user_id = user.insert({
            'first_name': first_name,
            'last_name': last_name,
            'email': email,
            'password': password,
            'fields': fields,
            'about': about,
            'projects': [],
            'stars': 0,
            'invitations': 0
        })
        print(user_id)
        new_user = user.find_one({'_id': user_id})
        return jsonify({'result': str(user_id)})


class getUser(Resource):
    def get(self):
        user = mongo.db.users
        users = list(user.find())
        fusers = []
        for i in request.get_json()['fields']:
            for j in users:
                print(dict(j))
                if i in dict(j)['fields']:
                    fusers.append(dict(j))
        if fusers:
            print(fusers)
            return jsonify({'result': userList(fusers)})
        else:
            return jsonify({'result': "not found"})


class projectCreation(Resource):
    def post(self):
        project = mongo.db.projects
        data = request.get_json()
        print("helloooo kkkkkkkkkkkkkkk")
        proj = project.insert({
            "title": data['title'],
            "creator": data['creator'],
            "description": data['description'],
            "etat": False,
            "fields": data['fields'].split(' '),
            "member": [],
            "request": data['members'].split(' ')
        })
        if proj:
            return jsonify({"result": "success"})
        else:
            return jsonify({"result": "error"})
    def get(self):
        return "ani"

class getProj(Resource):
    def post(self):
        project = mongo.db.projects
        user = mongo.db.users
        data = request.get_json()

        projects = []
        if data['role'] == 'c':
            project = list(project.find())
            for i in project:
                dict(i)['creator']
                if dict(i)['creator'] == data['id']:
                    projects.append(dict(i))
        if data['role'] == 'p':
            project = list(project.find())
            for i in project:
                if data['id'] in i['member']:
                    projects.append(dict(i))
        return jsonify({"result": projList(projects)})


class searchProfile(Resource):
    def get(self):
        user = mongo.db.users
        data = request.get_json()["fields"]
        users = list(user.find())
        resp = []
        for f in data:
            for u in users:
                if f in dict(u)['fields']:
                    if dict(u) not in resp:
                        resp.append(dict(u))
        return jsonify({"result": userList(resp)})


class searchProject(Resource):
    def get(self):
        project = mongo.db.project
        data = request.get_json()['fields']
        projects = list(project.find())
        resp = []
        for f in data:
            for p in projects:
                if f in dict(p)['fields']:
                    if dict(p) not in resp:
                        resp.append(dict(p))

        resp = Response(jsonify({"result": projList(resp)}))
        return resp


api.add_resource(login, '/api/login')
api.add_resource(signUp, '/api/signUp')
api.add_resource(getUser, '/api/profile/get')
api.add_resource(projectCreation, '/api/project/create')
api.add_resource(getProj, '/api/project/post')
api.add_resource(searchProfile, '/api/search/profile')
api.add_resource(searchProject, '/api/search/project')


@app.route('/')
def index():
	return "cross"


if __name__ == "__main__":
    app.run(debug=False)
