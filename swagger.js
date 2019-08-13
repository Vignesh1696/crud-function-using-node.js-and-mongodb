'use strict';


module.exports = {
	"swagger": "2.0",
	"info": {
		"version": "1.0.0",
		"title": "Sekar-Test",
		"description": "Yet Another Node.js Blogg Application API",
		"license": {
			"name": "MIT",
			"url": "https://opensource.org/licenses/MIT"
		}
	},
	"servers": {
		"url": "http://localhost:3000"
	},
	"basePath": "/",

	"schemes": [
		"http"
	],
	"consumes": [
		"application/json",
		"multipart/form-data"
	],
	"produces": [
		"application/json",
		"multipart/form-data"
	],
	"components": {
		"securitySchemes": {
			"BearerAuth": {
				"type": "http",
				"schema": "bearer",
				"bearerFormat": "JWT"
			}
		}
	},

	"paths": {

		"/personal": {
			"post": {
				"tags": [
					"Personal"
				],
				"description": "Create new personal-details ",
				"parameters": [{
					"name": "personal",
					"in": "body",
					"description": "personal-details that we want to create",
					"schema": {
						"$ref": "#/definitions/Personal"
					}
				}],
				"produces": [
					"application/json"
				],
				"responses": {
					"201": {
						"description": "Success",
						"schema": {
							"$ref": "#/definitions/Personal"
						}


					}
				},
			},
			"get": {
				"tags": [
					"Personal"
				],
				"summary": "Get all Personal",
				"parameters": [{
					"name": "from",
					"in": "query",
					"description": "Ex: 2017-04-07",
					"required": false,
					"type": "string"
				}, {
					"name": "to",
					"in": "query",
					"description": "Ex: 2017-04-07",
					"required": false,
					"type": "string"
				}],
				"responses": {
					"200": {
						"description": "Success",
						"schema": {
							"$ref": "#/definitions/Personal"
						}


					},

				}
			},
		},
		"/personal/{id}": {
			"parameters": [{
				"name": "id",
				"in": "path",
				"required": true,
				"description": "ObjectId",
				"type": "string"
			}],
			"get": {
				"tags": [
					"Personal"
				],
				"summary": "Get personal-details with given ID",
				"responses": {
					"200": {
						"description": "Success",
						"schema": {
							"$ref": "#/definitions/Personal"
						},

					}

				}
			},
			"put": {
				"summary": "Update personal-details with give ID",
				"tags": [
					"Personal"
				],
				"parameters": [{
					"name": "personal",
					"in": "body",
					"description": "personal-details with new values of properties",
					"schema": {
						"$ref": "#/definitions/Personal"
					}
				}],
				"responses": {
					"200": {
						"description": "Success",
						"schema": {
							"$ref": "#/definitions/Personal"
						},

					}

				}
			},
			"delete": {
				"summary": "Delete personal-details with given ID",
				"tags": [
					"Personal"
				],
				"responses": {
					"200": {
						"description": "Success",
						"schema": {
							"$ref": "#/definitions/Personal"
						}
					}
				}
			},

		}

	},

	"definitions": {

		"Personal": {

			"properties": {
				"name": {
					"type": "string"
				},
				"address": {
					"type": "string"
				},
				"email": {
					"type": "string"
				},
				"phone": {
					"type": "number"
				},
				"dob": {
					"type": "date"
				},
				"college": {
					"type": "string"
				},
				"university": {
					"type": "string"
				},
				"qualification": {
					"type": "string"
				},
				"type": {
					"type": "string",
					"enum": ["fresher", "experience"]
				},
				"company": {
					"type": "array",
					"items": {
						"type": "object",
						"properties": {
							"companyName": {
								"type": "string"
							},
							"experience": {
								"type": "number"
							},
							"jobDescription": {
								"type": "string"
							},
							"achievements": {
								"type": "string"
							},
							"skills": {
								"type": "string"
							},
							"salary": {
								"type": "number"
							}
						}
					}
				},

			}
		}
	}


}