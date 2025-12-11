import { project} from "./projet.js";
import { gen_card } from "../script/utils.js";

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
                                const div = document.createElement('div');

                                div.innerHTML = `
                                <span class="entete_color">${data.entete}</span><span class="valid">  ${data.element} ${data.argument.join(" ")}</span>

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
                                print_result(div);
                            }
                    },
                    "competence": {
                        "type": "file",
                        "description": "Affcihe mes compétence en programmation",
                        "action":
                            function action(data) {
                                const div = document.createElement('div');

                                div.innerHTML = `
                            <span class="entete_color">${data.entete}</span><span class="valid">  ${data.element} ${data.argument.join(" ")}</span>

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

                                print_result(div);
                            }
                    },
                    "projet": {
                        "type": "file",
                        "description": "Affiche mes projet personnel",
                        "action":
                            function action(data) {
                                const div = document.createElement('div');

                                div.innerHTML = `
                                <span class="entete_color">${data.entete}</span><span class="valid">  ${data.element} ${data.argument.join(" ")}</span>
                                <div>
                                    <div class="color_response card">
                                    ${gen_card(project).map((item, index) => {
                                        return `<pre class="projet-card ${index === 0 ? '' : 'hide_card'}">${item}</pre>`;
                                    }).join('\n')}
                                </div>
                                <a class="select_response suiv" onclick="select_menu(this.parentElement, false)"><--Précédent</a>
                                <a class="select_response prec" onclick="select_menu(this.parentElement, true)">Suivant--></a>
                                </div>  
                                `;

                                print_result(div);
                            }
                    },
                    "contact": {
                        "type": "file",
                        "description": "Affiche mes contact",
                        "action":
                        function action(data) {
                            const div = document.createElement("div");

                            div.innerHTML = `
                                <span class="entete_color">${data.entete}</span><span class="valid">  ${data.element} ${data.argument.join(" ")}</span>

                                <pre class="color_response">
Réseaux & Contact
=================
> GitHub   : <a href="https://github.com/thomasderome">github.com/thomasderome</a>
> Mail     : <a href="contact.html">thomas.derome@epitech.eu</a>
                            `;
                            print_result(div);
                        }
                    },
                    "photo": {
                        "type": "file",
                        "description": "Affiche mon portrait",
                        "action":
                        function action(data) {
                            const div = document.createElement("div");

                            div.innerHTML = `
                                <span class="entete_color">${data.entete}</span><span class="valid">  ${data.element} ${data.argument.join(" ")}</span>

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
                                print_result(div);
                        }
                    }
                }
            }
        }
    }
}

export { virtual_path };