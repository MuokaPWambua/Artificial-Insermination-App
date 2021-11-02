FROM python:3.8.10-alpine

# Set the working directory to /app
WORKDIR /app

# Copy the current directory contents into the container at /app 
ADD . /app

# create the app user

#RUN adduser -D  app wheel
#RUN addgroup app wheel
# chown all the files to the app user
#RUN chown -R app:app /app
#RUN chown -R app:app /app/uploads
#RUN chown -R app:app ./uploads

#COPY --chown=app:app ./ /app
#COPY --chown=app:app ./ /app/uploads  
# Install the dependencies
RUN apk update && apk upgrade && apk add --virtual python3-pip doas
RUN apk add --virtual python3-dev postgresql-dev libpq build-base jpeg-dev zlib-dev linux-headers pcre-dev
RUN pip3 install -r requirements.txt
RUN pip3 install shortuuid
RUN pip3 install uwsgi
# change to the app user
RUN chmod a+rwx /app/entrypoint.sh
RUN chmod 777 /app/media
RUN chmod 777 ./media
RUN chmod 777 /app
# #run the command to start uWSGI
#USER app
CMD ["uwsgi", "uwsgi.ini"]
ENTRYPOINT ["./entrypoint.sh"]






