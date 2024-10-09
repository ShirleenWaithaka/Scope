//data base
const database = [
    {username: 'Njiji_Noela', password: "123", role: 'Admin'},
    {username: 'Andrew Sigei', password: "234", role: 'User'},
    {username: 'Shirleen Waithaka', password: "345", role: 'User'},
    {username: 'Brian Kipyegon', password: "456", role: 'User'}
    
];
function LoginUser(username, password){
    
    //1.checks if a username exists in the data base and if the password is correct
    //2. using dot and bracket notation to check our object.
        
       // const user = database.find(user=> user["username"] === username && user.password === password)
       let user=null
    //    for(let i=0; i<database.length; i=i+1){
    //      let record=database[i]
    //      //console.log(record)
    //      if(record.username===username && record.password===password){
    //         user=record
    //         break
    //      }
    //    }
       let i=0
       while(i<database.length){
        let record=database[i]
                 if(record.username===username && record.password===password){
            user=record
            break
         }
         i++
       }

        if (!user){
            return 'invalid user or password'
    
        }
        //Block scope variable to check for admin role
        {
            const IsAdmin= user.role === 'Admin';
            if (IsAdmin){
                return 'Admin access granted'

            }else {
                return 'User access granted'
            }
        }
    };

    console.log (LoginUser ('Njiji_Noela', '123'));
    console.log (LoginUser ('Njiji', '123'));
    console.log (LoginUser ('Andrew Sigei', '234'));
    console.log (LoginUser ('Shirleen Waithaka', '345'));
    console.log (LoginUser ('Brian Kipyegon', '456'));
    console.log (LoginUser ('Andrew Sigei', '123'));
