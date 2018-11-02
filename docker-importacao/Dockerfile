FROM jboss/wildfly:14.0.1.Final

# ESSE NAO DEU PRA DEIXAR NO JAVAOPTS: -Xmx4096m -Djava.net.preferIPv4Stack=true
#ENV JAVA_OPTS=-Xms64m  -XX:MetaspaceSize=96M -XX:MaxMetaspaceSize=256m

USER jboss

VOLUME [ "/opt/jboss/wildfly/standalone/deployments" ]

# A porta 8787 é apenas para debug em desenvolvimento
EXPOSE 8787

EXPOSE 8080
