import { Request, Response } from 'express';
import os from 'os';
import dns from 'dns';

var ip = '';
dns.lookup(os.hostname(), { family: 0 }, (err, add, fam) => {
  ip = add;
});

class Index {
  async index(req: Request, res: Response) {
    const response = {
      "info": {
        "_postman_id": "804969cd-bdba-4848-95f4-57e36c26df22",
        "name": "API Digimon Documentation",
        "schema": "https://schema.getpostman.com/json/collection/v2.1.0/collection.json"
      },
      "item": [
        {
          "name": "Get ALL Digimons",
          "request": {
            "auth": {
              "type": "bearer",
              "bearer": [
                {
                  "key": "token",
                  "value": "{{token}}",
                  "type": "string"
                }
              ]
            },
            "method": "GET",
            "header": [],
            "url": {
              "raw": "{{baseUrl}}/digimon",
              "host": [
                "{{baseUrl}}"
              ],
              "path": [
                "digimon"
              ]
            },
            "description": "Buscando Lista Completa de Digimons no Banco"
          },
          "response": [
            {
              "name": "unexpected error",
              "originalRequest": {
                "method": "GET",
                "header": [],
                "url": {
                  "raw": "{{baseUrl}}/user?id=<integer>",
                  "host": [
                    "{{baseUrl}}"
                  ],
                  "path": [
                    "user"
                  ],
                  "query": [
                    {
                      "key": "id",
                      "value": "<integer>"
                    }
                  ]
                }
              },
              "status": "Internal Server Error",
              "code": 500,
              "_postman_previewlanguage": "json",
              "header": [
                {
                  "key": "Content-Type",
                  "value": "application/json"
                }
              ],
              "cookie": [],
              "body": "{\n \"code\": -63551005,\n \"message\": \"ad\"\n}"
            },
            {
              "name": "Details about a user",
              "originalRequest": {
                "method": "GET",
                "header": [],
                "url": {
                  "raw": "{{baseUrl}}/user?id=<integer>",
                  "host": [
                    "{{baseUrl}}"
                  ],
                  "path": [
                    "user"
                  ],
                  "query": [
                    {
                      "key": "id",
                      "value": "<integer>"
                    }
                  ]
                }
              },
              "status": "OK",
              "code": 200,
              "_postman_previewlanguage": "json",
              "header": [
                {
                  "key": "x-next",
                  "value": "dolor nulla in adipisicing Lorem",
                  "description": "A link to the next page of responses"
                },
                {
                  "key": "Content-Type",
                  "value": "application/json"
                }
              ],
              "cookie": [],
              "body": "{\n \"id\": 57802468,\n \"name\": \"in\",\n \"tag\": \"dolor sint culpa sunt\"\n}"
            }
          ]
        },
        {
          "name": "Get  Token Access",
          "request": {
            "method": "GET",
            "header": [],
            "url": {
              "raw": "{{baseUrl}}/token",
              "host": [
                "{{baseUrl}}"
              ],
              "path": [
                "token"
              ]
            },
            "description": "Buscando Lista Completa de Digimons no Banco"
          },
          "response": [
            {
              "name": "Details about a user",
              "originalRequest": {
                "method": "GET",
                "header": [],
                "url": {
                  "raw": "{{baseUrl}}/user?id=<integer>",
                  "host": [
                    "{{baseUrl}}"
                  ],
                  "path": [
                    "user"
                  ],
                  "query": [
                    {
                      "key": "id",
                      "value": "<integer>"
                    }
                  ]
                }
              },
              "status": "OK",
              "code": 200,
              "_postman_previewlanguage": "json",
              "header": [
                {
                  "key": "x-next",
                  "value": "dolor nulla in adipisicing Lorem",
                  "description": "A link to the next page of responses"
                },
                {
                  "key": "Content-Type",
                  "value": "application/json"
                }
              ],
              "cookie": [],
              "body": "{\n \"id\": 57802468,\n \"name\": \"in\",\n \"tag\": \"dolor sint culpa sunt\"\n}"
            },
            {
              "name": "unexpected error",
              "originalRequest": {
                "method": "GET",
                "header": [],
                "url": {
                  "raw": "{{baseUrl}}/user?id=<integer>",
                  "host": [
                    "{{baseUrl}}"
                  ],
                  "path": [
                    "user"
                  ],
                  "query": [
                    {
                      "key": "id",
                      "value": "<integer>"
                    }
                  ]
                }
              },
              "status": "Internal Server Error",
              "code": 500,
              "_postman_previewlanguage": "json",
              "header": [
                {
                  "key": "Content-Type",
                  "value": "application/json"
                }
              ],
              "cookie": [],
              "body": "{\n \"code\": -63551005,\n \"message\": \"ad\"\n}"
            }
          ]
        },
        {
          "name": "Get Documantion",
          "request": {
            "auth": {
              "type": "bearer",
              "bearer": [
                {
                  "key": "token",
                  "value": "{{token}}",
                  "type": "string"
                }
              ]
            },
            "method": "GET",
            "header": [],
            "url": {
              "raw": "{{baseUrl}}/",
              "host": [
                "{{baseUrl}}"
              ],
              "path": [
                ""
              ]
            },
            "description": "Buscando Lista Completa de Digimons no Banco"
          },
          "response": [
            {
              "name": "Details about a user",
              "originalRequest": {
                "method": "GET",
                "header": [],
                "url": {
                  "raw": "{{baseUrl}}/user?id=<integer>",
                  "host": [
                    "{{baseUrl}}"
                  ],
                  "path": [
                    "user"
                  ],
                  "query": [
                    {
                      "key": "id",
                      "value": "<integer>"
                    }
                  ]
                }
              },
              "status": "OK",
              "code": 200,
              "_postman_previewlanguage": "json",
              "header": [
                {
                  "key": "x-next",
                  "value": "dolor nulla in adipisicing Lorem",
                  "description": "A link to the next page of responses"
                },
                {
                  "key": "Content-Type",
                  "value": "application/json"
                }
              ],
              "cookie": [],
              "body": "{\n \"id\": 57802468,\n \"name\": \"in\",\n \"tag\": \"dolor sint culpa sunt\"\n}"
            },
            {
              "name": "unexpected error",
              "originalRequest": {
                "method": "GET",
                "header": [],
                "url": {
                  "raw": "{{baseUrl}}/user?id=<integer>",
                  "host": [
                    "{{baseUrl}}"
                  ],
                  "path": [
                    "user"
                  ],
                  "query": [
                    {
                      "key": "id",
                      "value": "<integer>"
                    }
                  ]
                }
              },
              "status": "Internal Server Error",
              "code": 500,
              "_postman_previewlanguage": "json",
              "header": [
                {
                  "key": "Content-Type",
                  "value": "application/json"
                }
              ],
              "cookie": [],
              "body": "{\n \"code\": -63551005,\n \"message\": \"ad\"\n}"
            }
          ]
        },
        {
          "name": "Get Digimon by id",
          "request": {
            "auth": {
              "type": "bearer",
              "bearer": [
                {
                  "key": "token",
                  "value": "{{token}}",
                  "type": "string"
                }
              ]
            },
            "method": "GET",
            "header": [],
            "url": {
              "raw": "{{baseUrl}}/digimon/8",
              "host": [
                "{{baseUrl}}"
              ],
              "path": [
                "digimon",
                "8"
              ]
            },
            "description": "Busca de digimon específico através de um ID"
          },
          "response": [
            {
              "name": "Details about a user",
              "originalRequest": {
                "method": "GET",
                "header": [],
                "url": {
                  "raw": "{{baseUrl}}/user?id=<integer>",
                  "host": [
                    "{{baseUrl}}"
                  ],
                  "path": [
                    "user"
                  ],
                  "query": [
                    {
                      "key": "id",
                      "value": "<integer>"
                    }
                  ]
                }
              },
              "status": "OK",
              "code": 200,
              "_postman_previewlanguage": "json",
              "header": [
                {
                  "key": "x-next",
                  "value": "dolor nulla in adipisicing Lorem",
                  "description": "A link to the next page of responses"
                },
                {
                  "key": "Content-Type",
                  "value": "application/json"
                }
              ],
              "cookie": [],
              "body": "{\n \"id\": 57802468,\n \"name\": \"in\",\n \"tag\": \"dolor sint culpa sunt\"\n}"
            },
            {
              "name": "unexpected error",
              "originalRequest": {
                "method": "GET",
                "header": [],
                "url": {
                  "raw": "{{baseUrl}}/user?id=<integer>",
                  "host": [
                    "{{baseUrl}}"
                  ],
                  "path": [
                    "user"
                  ],
                  "query": [
                    {
                      "key": "id",
                      "value": "<integer>"
                    }
                  ]
                }
              },
              "status": "Internal Server Error",
              "code": 500,
              "_postman_previewlanguage": "json",
              "header": [
                {
                  "key": "Content-Type",
                  "value": "application/json"
                }
              ],
              "cookie": [],
              "body": "{\n \"code\": -63551005,\n \"message\": \"ad\"\n}"
            }
          ]
        },
        {
          "name": "Get Digimons by name",
          "request": {
            "auth": {
              "type": "bearer",
              "bearer": [
                {
                  "key": "token",
                  "value": "{{token}}",
                  "type": "string"
                }
              ]
            },
            "method": "GET",
            "header": [],
            "url": {
              "raw": "{{baseUrl}}/digimon/search/gabumon",
              "host": [
                "{{baseUrl}}"
              ],
              "path": [
                "digimon",
                "search",
                "gabumon"
              ]
            },
            "description": "Busca de digimon específico através de um ID"
          },
          "response": [
            {
              "name": "unexpected error",
              "originalRequest": {
                "method": "GET",
                "header": [],
                "url": {
                  "raw": "{{baseUrl}}/user?id=<integer>",
                  "host": [
                    "{{baseUrl}}"
                  ],
                  "path": [
                    "user"
                  ],
                  "query": [
                    {
                      "key": "id",
                      "value": "<integer>"
                    }
                  ]
                }
              },
              "status": "Internal Server Error",
              "code": 500,
              "_postman_previewlanguage": "json",
              "header": [
                {
                  "key": "Content-Type",
                  "value": "application/json"
                }
              ],
              "cookie": [],
              "body": "{\n \"code\": -63551005,\n \"message\": \"ad\"\n}"
            },
            {
              "name": "Details about a user",
              "originalRequest": {
                "method": "GET",
                "header": [],
                "url": {
                  "raw": "{{baseUrl}}/user?id=<integer>",
                  "host": [
                    "{{baseUrl}}"
                  ],
                  "path": [
                    "user"
                  ],
                  "query": [
                    {
                      "key": "id",
                      "value": "<integer>"
                    }
                  ]
                }
              },
              "status": "OK",
              "code": 200,
              "_postman_previewlanguage": "json",
              "header": [
                {
                  "key": "x-next",
                  "value": "dolor nulla in adipisicing Lorem",
                  "description": "A link to the next page of responses"
                },
                {
                  "key": "Content-Type",
                  "value": "application/json"
                }
              ],
              "cookie": [],
              "body": "{\n \"id\": 57802468,\n \"name\": \"in\",\n \"tag\": \"dolor sint culpa sunt\"\n}"
            }
          ]
        },
        {
          "name": "Get Digimons by level",
          "request": {
            "auth": {
              "type": "bearer",
              "bearer": [
                {
                  "key": "token",
                  "value": "{{token}}",
                  "type": "string"
                }
              ]
            },
            "method": "GET",
            "header": [],
            "url": {
              "raw": "{{baseUrl}}/digimon/level/6",
              "host": [
                "{{baseUrl}}"
              ],
              "path": [
                "digimon",
                "level",
                "6"
              ]
            },
            "description": "Busca de digimon específico através de um ID"
          },
          "response": [
            {
              "name": "unexpected error",
              "originalRequest": {
                "method": "GET",
                "header": [],
                "url": {
                  "raw": "{{baseUrl}}/user?id=<integer>",
                  "host": [
                    "{{baseUrl}}"
                  ],
                  "path": [
                    "user"
                  ],
                  "query": [
                    {
                      "key": "id",
                      "value": "<integer>"
                    }
                  ]
                }
              },
              "status": "Internal Server Error",
              "code": 500,
              "_postman_previewlanguage": "json",
              "header": [
                {
                  "key": "Content-Type",
                  "value": "application/json"
                }
              ],
              "cookie": [],
              "body": "{\n \"code\": -63551005,\n \"message\": \"ad\"\n}"
            },
            {
              "name": "Details about a user",
              "originalRequest": {
                "method": "GET",
                "header": [],
                "url": {
                  "raw": "{{baseUrl}}/user?id=<integer>",
                  "host": [
                    "{{baseUrl}}"
                  ],
                  "path": [
                    "user"
                  ],
                  "query": [
                    {
                      "key": "id",
                      "value": "<integer>"
                    }
                  ]
                }
              },
              "status": "OK",
              "code": 200,
              "_postman_previewlanguage": "json",
              "header": [
                {
                  "key": "x-next",
                  "value": "dolor nulla in adipisicing Lorem",
                  "description": "A link to the next page of responses"
                },
                {
                  "key": "Content-Type",
                  "value": "application/json"
                }
              ],
              "cookie": [],
              "body": "{\n \"id\": 57802468,\n \"name\": \"in\",\n \"tag\": \"dolor sint culpa sunt\"\n}"
            }
          ]
        }
      ],
      "variable": [
        {
          "id": "baseUrl",
          "key": "baseUrl",
          "value": "http://petstore.swagger.io/v1",
          "type": "string"
        }
      ],
      "protocolProfileBehavior": {}
    }
    return res.json({
      status: true,
      response
    });
  }
}

export default Index;