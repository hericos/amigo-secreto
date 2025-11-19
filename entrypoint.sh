#!/bin/sh
set -e

: "${SORTUDO:=Fulano}"
: "${PARTICIPANTES:=Fulano,Beltrano,Ciclano}"

# Converte PARTICIPANTES -> array JS
PARTICIPANTES_JS=$(echo "$PARTICIPANTES" | awk -F',' '{ printf "["; for(i=1;i<=NF;i++){ printf "\""$i"\""; if(i<NF) printf "," } printf "]" }')

cat <<EOF >/usr/share/nginx/html/config.js
window.SORTUDO = "${SORTUDO}";
window.PARTICIPANTES = ${PARTICIPANTES_JS};
EOF

exec nginx -g 'daemon off;'