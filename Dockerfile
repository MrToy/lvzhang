FROM tomcat:7-alpine
RUN rm -rf /usr/local/tomcat/webapps/*
ADD ROOT.war /usr/local/tomcat/webapps/ROOT
RUN unzip ROOT.war
ADD jdbc.properties /usr/local/tomcat/webapps/ROOT/WEB-INF/classes/jdbc.properties