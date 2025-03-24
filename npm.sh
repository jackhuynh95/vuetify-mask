#!/bin/bash
#
######################################################################
#    FUNÇÃO SCRIPT.: COPIAR ARQUIVOS PARA O DIRETORIO npm            # 
#                    PUBLICAR COMPONENTE NO NPM                      #
#------------------------------------------------------------------- #
#                                                                    #
#       DESENVOLVIMENTO.: JUAREZ NASATO                              #
#       EMAIL.: JUAREZNASATO@GMAIL.COM                               #
#       DATA CRIACAO.: 11/05/2019                                    #
#       VERSAO.: 0.0.1                                               #
#                                                                    #
######################################################################
#
# --> COMANDOS <--
# $ npm login           login in npm
# $ sh npm.sh -pk       pack
# $ sh npm.sh -pb       publish
#
echo "\033[1;36m  #    # #####  #    #       #####  #    # #####  \033[0m";
echo "\033[1;36m  ##   # #    # ##  ##       #    # #    # #    # \033[0m";
echo "\033[1;36m  # #  # #    # # ## #       #    # #    # #    # \033[0m";
echo "\033[1;36m  #  # # #####  # #  #  ###  #####  #    # #####  \033[0m";
echo "\033[1;36m  #   ## #      #    #       #      #    # #    # \033[0m";
echo "\033[1;36m  #    # #      #    #       #      #    # #    # \033[0m";
echo "\033[1;36m  #    # #      #    #       #      ###### #####  \033[0m";
echo
echo "Copiando arquivos...";
mkdir -p npm;
cp -r package.json npm/;
cp -r README.md npm/;
cp -r src/components/* npm/;
echo "Copiado.";
if [ $1 = "-pk" ];
then
    echo "Empacotando arquivos...";
    npm pack ./npm;
    echo "Empacotado.";
fi;

if [ $1 = "-pb" ];
then
    echo "npm login...";
    npm login;
    echo "Publicando no npm...";
    npm publish ./npm --access public;
    echo "Publicado."
fi;
echo "Excluindo arquivos...";
rm -rf npm/*
echo "Arquivos excluidos.";
echo "Fim.";

