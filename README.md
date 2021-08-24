# WebToolkit
A Basic Web toolkit

<img width="100%" height="200px" src="./static/AMKit.svg" />

## Building

```
docker build -t educelestia .
docker build -t registry.heroku.com/educelestia/web .
docker push registry.heroku.com/educelestia/web
heroku container:release web -a educelestia
```