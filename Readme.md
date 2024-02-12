# Development environment

In order to run application use:
      `docker-compose up`

> Sample endpoints
      ###
      POST http://localhost:3000/feedDB HTTP/1.1
      Content-Type: : application/json

      ###
      GET http://localhost:3000/users/2 HTTP/1.1


      ### 
      GET  http://localhost:3000/users/queue/?sender=10&receiver=9 HTTP/1.1
      Content-Type: application/json

      {
      "sender": 10,
      "receiver": 9
      }

      ###
      GET  http://localhost:3000/users/favorites/2 HTTP/1.1
      Content-Type: application/json
