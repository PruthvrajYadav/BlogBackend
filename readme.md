{
	"info": {
		"_postman_id": "cea31e96-477a-49eb-9cb4-9abbbee17395",
		"name": "blogPractice",
		"schema": "https://schema.getpostman.com/json/collection/v2.0.0/collection.json",
		"_exporter_id": "39588880"
	},
	"item": [
		{
			"name": "user",
			"item": [
				{
					"name": "getUser",
					"request": {
						"method": "GET",
						"header": [],
						"url": "localhost:5001/api/user"
					},
					"response": []
				},
				{
					"name": "postUser",
					"request": {
						"method": "POST",
						"header": [],
						"body": {
							"mode": "raw",
							"raw": "{\r\n    \"name\":\"om\",\r\n    \"email\":\"om@gmail.com\",\r\n    \"password\":\"om123\"\r\n}",
							"options": {
								"raw": {
									"language": "json"
								}
							}
						},
						"url": "localhost:5001/api/user/login"
					},
					"response": []
				}
			]
		},
		{
			"name": "getBlog",
			"request": {
				"method": "GET",
				"header": []
			},
			"response": []
		},
		{
			"name": "postBlog",
			"request": {
				"method": "POST",
				"header": [
					{
						"key": "auth-token",
						"value": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2ODNiMzY5YWIxYzg5YmQxNzMwZGMzNDQiLCJpYXQiOjE3NDg3MTEwNzh9.lhEznCCay-RVHNgzZRfZJn2Un5m16nMTQUyfuFXMwRg",
						"type": "text"
					},
					{
						"key": "admin",
						"value": "admin",
						"type": "text"
					}
				],
				"body": {
					"mode": "raw",
					"raw": "{\r\n    \"title\":\"be humble\",\r\n    \"content\":\"never judge people into thair face\"\r\n}",
					"options": {
						"raw": {
							"language": "json"
						}
					}
				},
				"url": "localhost:5001/api/blog"
			},
			"response": []
		},
		{
			"name": "putBlog",
			"request": {
				"method": "GET",
				"header": []
			},
			"response": []
		}
	]
}
