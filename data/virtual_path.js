const virtual_path = {
    "~": {
        "type": "folder",
        "children": {
            "portfolio": {
                "type": "folder",
                "children": {
                    "a-propos": {
                        "type": "file",
                        "description": "Afficher mes informations",
                        "action":
                            function action(data) {
                                const history = document.getElementById('history');
                                const div = document.createElement('div');

                                div.innerHTML = `
                                <span class="entete_color">${data["entete"]}</span><span class="valid">  ${data["element"]} ${data["argument"].join(" ")}</span>

                                <pre class="color_response">
╔═══════════════════════════════════════════╗
║          *** A PROPOS DE MOI ***          ║
╠═══════════════════════════════════════════╣
║ > PRENOM       : Thomas                   ║
║ > ÂGE          : 18 ans                   ║
║ > LOCALISATION : Nice, France             ║
║ > STATUT       : Étudiant @ Epitech Nice  ║
║ > PASSION      : Résoudre des problèmes   ║
║                  avec du code, jeux vidéo ║
╚═══════════════════════════════════════════╝</pre>
                                `;
                                history.append(div);
                            }
                    },
                    "competence": {
                        "type": "file",
                        "description": "Affcihe mes compétence en programmation",
                        "action":
                            function action(data) {
                                const history = document.getElementById('history');
                                const div = document.createElement('div');

                                div.innerHTML = `
                            <span class="entete_color">${data["entete"]}</span><span class="valid">  ${data["element"]} ${data["argument"].join(" ")}</span>

                            <pre class="color_response">
Compétences Techniques
========================

Langage & Frameworks
--------------------
Python
[█████████████████----] 80%
Flask & discord.py
[███████████████------] 70%

Domaines
--------
Web Scraping (bs4, Requests)
[█████████████████----] 80%
Automatisation (Selenium)
[███████████----------] 50%

Donnée
------
Gestion de BDD (JSON)
[███████████████------] 70%

Interface
---------
Front-End (HTML, CSS, JS)
[█████████------------] 40%
                            </pre>
                            `;

                                history.append(div);
                            }
                    },
                    "projet": {
                        "type": "file",
                        "description": "Affiche mes projet personnel",
                        "action":
                            function action(data) {
                                const history = document.getElementById("history");
                                const div = document.createElement('div');

                                div.innerHTML = `
                                <span class="entete_color">${data["entete"]}</span><span class="valid">  ${data["element"]} ${data["argument"].join(" ")}</span>
                                <pre class="color_response">
+--[ Projet ]--+
+--[ Radio-Stream ]----------------------------------+
|                                                    |
|  Scrappe les flux de radios françaises et les rend |
|  accessibles via une page web interactive avec un  |
|  lecteur, une recherche et des sauvegardes.        |
|  Tech: Flask, bs4, Requests, HTML/CSS/JS           |
|                                                    |
+----------------------------------------------------+

+--[ Vote-Bot ]--------------------------------------+
|                                                    |
|  Automatise les votes sur des serveurs de jeu      |
|  pour obtenir des récompenses, le tout piloté      |
|  par un panel de contrôle web.                     |
|  Tech: Selenium, Flask, HTML/CSS/JS                |
|                                                    |
+----------------------------------------------------+

+--[ Bot-JDR ]---------------------------------------+
|                                                    |
|  Bot Discord conçu pour le jeu de rôle, permettant |
|  de sauvegarder et d'interagir avec des fiches de  |
|  personnages et des inventaires, lancer de dé.     |
|  Tech: discord.py, JSON                            |
|                                                    |
+----------------------------------------------------+

+--[ BotyBot ]---------------------------------------+
|                                                    |
|  Un bot de modération complet pour Discord,        |
|  incluant un système de tickets et les commandes   |
|  essentielles (ban, kick, mute).                   |
|  Tech: discord.py, SQLite                          |
|                                                    |
+----------------------------------------------------+

+--[ Bbox-api ]--------------------------------------+
|                                                    |
|  Une API Python pour interagir avec la Bbox et     |
|  configurer programmatiquement les règles du       |
|  pare-feu (NAT/PAT).                               |
|  Tech: Python, Requests                            |
|                                                    |
+----------------------------------------------------+

+--[ Crackers ]--------------------------------------+
|                                                    |
|  Une aplication de scrapping qui recherche et      |
|  recherche les cracks de jeux vidéo disponibles    |
|  sur différentes sources web.                      |
|  Tech: Python, bs4, Requests                       |
|                                                    |
+----------------------------------------------------+

+--[ NetflixKode-expired ]---------------------------+
|                                                    |
|  Script pour modifier ou retrouver le mot de passe |
|  d'une clé de connexion pour une extension Netlfix |
|  Kodi en utilisant des techniques de cryptographie.|
|  Tech: Python, PyCryptodome                        |
|                                                    |
+----------------------------------------------------+
                                </pre>
                                `;

                                history.appendChild(div);
                            }
                    },
                    "contact": {
                        "type": "file",
                        "description": "Affiche mes contact",
                        "action":
                        function action(data) {
                            const history = document.getElementById("history");
                            const div = document.createElement("div");

                            div.innerHTML = `
                                <span class="entete_color">${data["entete"]}</span><span class="valid">  ${data["element"]} ${data["argument"].join(" ")}</span>

                                <pre class="color_response">
Réseaux & Contact
=================
> GitHub   : <a href="https://github.com/thomasderome">github.com/thomasderome</a>
> Mail     : <a href="contact.html">thomas.derome@epitech.eu</a>
                            `;
                            history.appendChild(div);
                        }
                    },
                    "photo": {
                        "type": "file",
                        "description": "Affiche mon portrait",
                        "action":
                        function action(data) {
                            const history = document.getElementById("history");
                            const div = document.createElement("div");

                            div.innerHTML = `
                                <span class="entete_color">${data["entete"]}</span><span class="valid">  ${data["element"]} ${data["argument"].join(" ")}</span>

                                <pre class="color_response">
                                ++++++                                          
                          ++++++++###++++++++                                   
                     ##++++++++##+++++#######++++                               
                  #+++++++########################+++                           
                #+++++++++####+#++-----------+######++                          
              ####++#++++++#+++++---------------##++++                          
             #+#####+++###+++##+-----------------#+++++                         
           #+++++###++#++++#+++------------------+++++++                        
        ++++#+++#+##+++++###+---------------------#+#++++                       
      ++++++++#+##+++###++##++----------+++++++++++#####++++                    
      ###++++#+#+++####+#+#++++++-++---++---------++++#++++++                   
     #####++##+#+++#+###++++--++++++++++++++++++---+#####++++-                  
     ##++###+##+++##+####++++#+++++---++---------+++###+++++++                  
    +++#+##++#+##+++####+++++++---#----+---------+-+####+++++-                  
   ##+++++++#+++#+++####++-------#+-----+---------+-#####++++++--               
  ##++#+++++##++++++#+##+++#+++-+++------+-#++++----######++++++---             
 ##++########+##+###+#+#+++-----+++++-+#-----------++####++++++++---            
 ###+########+####+######++-----++#+++-------------++####++##++++--+            
 ###+###+#+#+#+###+####+##+------------------------#+#+#++++##+##+--            
  ###########+##+#######+#++-++++----------+++----+++####+++##++##++++          
   ##+######+####+##+##+##++++-++++++++++---------+#####+#++##+++##+++          
   ##################+#####+++---+++-++++---------#####+#++++++++##++++         
     ###+####++###+#########++++++++++++---------++###+++++#+##++#++-+          
        #############++######+++++-------------++++###+#+###+##++#++-+          
            ##################+++--------+-+-++---+########+#+++--#+++          
            ##+#####+########++#+++++++--++++++---+####+###++#+##+#+            
           #########+##+#####++++++++++++++-------+####+###+++#++#++            
           ################+#+++++++++------------+###++###++++++#+             
             #############+##+++++++++------------+#####+##+#+++++##++          
               ##########+#-+++----++--------------+#####++#+++++++##++-        
                #####+##+#+-++++---++---------------+######++##++++##++-+++     
</pre>
                                `;
                                history.appendChild(div);
                        }
                    }
                }
            }
        }
    }
}

export { virtual_path };