# Journal des erreurs de mon projet

# Date[22-mai-2026]

## 1- ERR_MODULE_NOT_FOUND

## Message
-bash:
-Type_Error [ERR_MODULE_NOT_FOUND]: Cannot find module

## Cause
-Le chemin (URL) ne correspondais pas
-import "/src/src/config/env.js

## Solution
-vérification du chemin dans le fichier index.js
-correction du chemin import "./config/env.js dans index.js