'reach 0.1';

//import { _getViews } from "./build/index.main.mjs";

//admin(school) const
//add students
//add files
//view files 
const Details = {
	owner: Address,
  name: Bytes(64),
  DOB: UInt,
  certificate: Bytes(32),
};


export const main = Reach.App(() => {
      const Admin = Participant('Admin', {
        meta: Bytes(256),
        allowUsers: Fun([], Null),
        confirmDeploy: Fun([], Null),
        
      });
     const Views = View(Details); //student details

    //declaring APIS for actors
    //Api for admin
    const AdminAPI = API('AdminAPI', { 
     addStudent: Fun([Address], Bool),     
    // upload: Fun([Address], Bool),
     });
      
      //view and accept request
      //api for student
      const StudentAPI = API('StudentAPI', {
       //approve: Fun([Address], Bool),
       register: Fun([Address], Bool),
      });
        
          
       //api for organization
      // const OrganizationAPI = API('OrganizationAPI', { 
      //  request: Fun([], Bool),
      //  notify: Fun([Address, Bool], Null), });
    

      init();


    // //Adding Student
    Admin.only(() => {
      const allowUsers= declassify(interact.allowUsers);
       });
      
      Admin.interact.confirmDeploy();
      Admin.publish();
      //commit();


      const adminAddress = Admin;
      const students = new Set();

     
      
      const initialState = {
        owner: Admin,
        DOB: Admin,
        name: 0,
      }

  
    const state = parallelReduce(initialState)
		.invariant(balance() == 0)
		.while(true)
		.define(() => {
			Views.owner.set(state.owner);
     // Views.name.set(state.name);
			//Views.DOB.set(state.DOB);
			//Views.certificate.set(state.certificate);
			//Views.isAvailable.set(state.owner == 0 || lastConsensusSecs() > state.owner);
			// Allow if registering for the first time 
			//const isAvailable = () => 
			//	state.owner == 0 || lastConsensusSecs() > state.owner;
		//	const isOwner = (addr) => addr === state.owner;
		})


      .api(
      AdminAPI.addStudent,
      
      ((_) => { assume(this == adminAddress); }), 

      //no payment needed
      ((_) => 0),
      ((newStudent, setResponse) => {
        require (this == adminAddress );
        students.insert(newStudent);
        setResponse(true);

        return state;
      })  
      )

      //commit();
        //student registration contract
        .api(
          StudentAPI.register,  
          // Underscore is a general naming convention if you don't use the variable
          ((_)   => {  assume (this == adminAddress); }),
          ((_) => 0),
          // Consensus step
          ((registering, ok) => {
            require (this == adminAddress);
            // This line adds the caller address to the set
            students.insert(this);
            ok(true);
            // This doesn't change the state actually, only change a set which is outisde of the state
            return state;
          })
        )
         
       
         //file contract 
    //   .api(
    //     AdminAPI.upload,
    //     ((_) => { assume (students.member(this) ); }), //assume student exist
    //     //no payment needed
    //     ((_) => 0)
    //     ((uploading, ok) => {
    //       require(students.member(this) );
    //      // let certArray = [];
    //       ok(true);
        
    //       return {
    //         owner: this,
    //        // certificates: this,
    //       };
    //     })
    //   )


        
      
    //  .api(OrganizationAPI.request,
            
    //      ((_) => { assume( students.member(this)) }),
        
    //      ((_) => 0),

    //      ((Organization, setResponse) => {
    //       const want = declassify(interact.request());
    //        Organization.publish().when(want).timeout(false);
    //        const requester = this;
    //       require( students.member(requester));
          
    //       setResponse(true);
  
    //        return [];
    //      })
    //      )


    //    .api(studentAPI.approve,
    //   ((_) =>    {    
    //    declassify(interact.approve(requester) ) }),

    //   // ((approving ) => { studentAPI.publish(okay) }),
    //    (approving, setResponse) => {
       
    //     students.insert(requester);
      
    //   setResponse(true)
    //   return  OrganizationAPI.interact.notify(requester);

    // })
      
      commit();
});




