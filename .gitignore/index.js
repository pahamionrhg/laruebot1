const  Discord  =  require ( ' discord.js ' );
 client  const =  new  Discord.Client ();
var prefix =  " $ " ;

client . login ( processus.env.TOKEN)

client . on ( " message " , message   => {
    si ( ! message . guilde ) retour
    if ( message . content  === préfixe +  " tg " ) {
        message . canal . envoyer ( message . auteur  +  "le putin de toi fdp je te rencontre des claque virtuel " )
    }        
});
