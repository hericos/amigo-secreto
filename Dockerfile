FROM nginx:alpine

# Diretório padrão do Nginx para arquivos estáticos
WORKDIR /usr/share/nginx/html

# Copia os arquivos estáticos
COPY index.html .
COPY style.css .
COPY app.js .
COPY config.js .

# Copia o entrypoint que vai gerar o config.js com base na env "sortudo"
COPY entrypoint.sh /entrypoint.sh
RUN chmod +x /entrypoint.sh

EXPOSE 80

CMD ["/entrypoint.sh"]