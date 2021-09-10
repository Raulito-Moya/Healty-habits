const {google} = require('googleapis');



const {
    OAUTH_USER,
    OAUTH_CLIENT_ID,
    OAUTH_CLIENT_SECRET,
    OAUTH_REFRESH_TOKEN,
     OAUTH_REDERICT_URI,
     OAUTH_REDERICT_URI2
    } =   process.env


const getUrl = async(req,res) => {

    try {
     
        const {code} = req.body
        console.log(code);
     
        const oauth2Client = new google.auth.OAuth2(
            OAUTH_CLIENT_ID,
            OAUTH_CLIENT_SECRET,
             OAUTH_REDERICT_URI2
          );
    
    
          const scopes = [
            'https://mail.google.com',
            
          ];
    
      /* const url = oauth2Client.generateAuthUrl({
      
            access_type: 'offline',
            include_granted_scopes:true,
            response_type:'code',
            scope:'https://mail.google.com',
            redirect_uri:OAUTH_REDERICT_URI2,
            client_id:OAUTH_CLIENT_ID
          });
    
         console.log(url);*/
       
     

         if(code){
            const coded = decodeURIComponent(code)
             const {tokens} = await oauth2Client.getToken(coded)
         oauth2Client.setCredentials(tokens);
         res.json({tokens}) 
         }
        



    } catch (error) {
        console.log(error);
    }
 
}


//this route is for get acces token and efresh token
router.post('/getCode',getUrl)
