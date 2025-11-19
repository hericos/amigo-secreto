#!/bin/sh
set -e

# Usa a env "sortudo" ou um valor padrão
: "${sortudo:=Fulano de Tal}"

# Gera o config.js com base na variável de ambiente
cat <<EOF >/usr/share/nginx/html/config.js
window.SORTUDO = "${sortudo}";
EOF

exec nginx -g 'daemon off;'