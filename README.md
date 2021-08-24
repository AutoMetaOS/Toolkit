# WebToolkit
A Basic Web toolkit


## Building

```
docker build -t educelestia .
docker build -t registry.heroku.com/educelestia/web .
docker push registry.heroku.com/educelestia/web
heroku container:release web -a educelestia
```