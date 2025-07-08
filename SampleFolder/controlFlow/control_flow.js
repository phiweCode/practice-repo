let userRole = "admin";
let accessLevel; 

if (userRole === "admin") {
    accessLevel = "Full access granted";
} else if (userRole === "manager") {
    accessLevel = "Limited access granted";
} else {
    accessLevel = "No access granted";
}

console.log("Access Level:", accessLevel); 

let isLoggedIn = true;
let userMessage;  

if (isLoggedIn) {
    if (userRole === "admin") {
        userMessage = "Welcome, Admin!";
    } else {
        userMessage = "Welcome, User!";
    }
} else {
    userMessage = "Please log in to access the system.";
} 

console.log("User Message:", userMessage);

let userType = "subscriber";
let userCategory;

switch (userType) {
    case "admin":
        userCategory = "Administrator";
        break;
    case "manager":
        userCategory = "Manager";
        break;
    case "subscriber":
        userCategory = "Subscriber";
        break;
    default:
        userCategory = "Unknown";
} 

console.log("User Category:", userCategory); 

let isAuthenticated = true;

let authenticationStatus = isAuthenticated ? "Authenticated" : "Not authenticated"; 

console.log("Authentication Status:", authenticationStatus); 

class Person { 
    constructor(personType)
    {
        this.personType = personType; 
        this.eligibleService = false; 
    } 

    #serviceAccessExtent 

    assignEligbleService () { 

        switch(this.personType)
        { 
            case "Employee": 
                this.eligibleService = True; 
                this.accessToDietician = True; 
                this.#serviceAccessExtent = "Full" 
            
            case "Enrolled":
                this.eligibleService = True; 
                this.accessToDietician = True;  
                this.#serviceAccessExtent = "Full" 
            
            case "Subscriber": 
                this.eligibleService = True; 
                this.accessToDietician = False;  
                this.#serviceAccessExtent = "Partial"  

            case "Non-Subscriber": 
                this.eligibleService = False; 
                this.accessToDietician = False;    
                this.#serviceAccessExtent = "None"  
            
            default: 
                throw new Error("Invalid user type provided, please provide either 'Employee', 'Enrolled', 'Subscriber', 'Non-Subscriber'")

        }
    } 

    getServiceExtent()
    {
        return this.#serviceAccessExtent; 
    }
} 

let member = new Person('Employee'); 

console.log(`This member has ${member.assignEligbleService ? "Access to diet service" : "No access to diet service"} ${member.assignEligbleService ? ", Access to one-on-one sessions with dietician" : ", No Access to one-on-one sessions with dietician"} and their overall access to diet service is ${member.getServiceExtent}`)

member = new Person('Enrolled'); 

console.log(`This member has ${member.assignEligbleService ? "Access to diet service" : "No access to diet service"} ${member.assignEligbleService ? ", Access to one-on-one sessions with dietician" : ", No Access to one-on-one sessions with dietician"} and their overall access to diet service is ${member.getServiceExtent}`)

member = new Person('Subscriber'); 

console.log(`This member has ${member.assignEligbleService ? "Access to diet service" : "No access to diet service"} ${member.assignEligbleService ? ", Access to one-on-one sessions with dietician" : ", No Access to one-on-one sessions with dietician"} and their overall access to diet service is ${member.getServiceExtent}`) 

member = new Person("Non-Subscriber"); 

console.log(`This member has ${member.assignEligbleService ? "Access to diet service" : "No access to diet service"} ${member.assignEligbleService ? ", Access to one-on-one sessions with dietician" : ", No Access to one-on-one sessions with dietician"} and their overall access to diet service is ${member.getServiceExtent}`)