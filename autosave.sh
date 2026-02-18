#!/bin/bash

while true
do
    # Detectar si hubo cambios
    if [[ -n $(git status --porcelain) ]]; then
        echo "Guardando cambios..."

        git add .
        git commit -m "Autoguardado $(date '+%Y-%m-%d %H:%M:%S')"
        git push origin main

        echo "✔ Cambios guardados"
    else
        echo "Sin cambios..."
    fi

    sleep 300
done
