FROM tomcat:7-alpine
RUN rm -rf /usr/local/tomcat/webapps/*
ADD ROOT /usr/local/tomcat/webapps/ROOT
ADD jdbc.properties /usr/local/tomcat/webapps/ROOT/WEB-INF/classes/jdbc.properties