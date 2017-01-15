FROM hub.c.163.com/library/node:6.9.2-alpine
RUN mkdir /var/www
RUN mkdir /var/www/test01
WORKDIR /var/www/test01
COPY . /var/www/test01
RUN npm i -g pm2
EXPOSE 3000
#ENTRYPOINT /bin/sh -c 'echo this is ENTRYPOINT!!'
CMD /bin/sh -c 'echo aaaaahahahaha' && pm2-docker start app.js
 
