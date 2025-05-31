/*
    Project Name : Bank System
   
    customer/employee : {
        id
        name,
        email,
        phone,
        nid,
        balance,
        accountType : 'Customer' | 'Employee',
    },
    transaction :{
        id,
        customerId,
        amount,
        type : 'Deposit' | 'Withdraw',
        date,wo types of users: customer and employee.
    },
    loan:{
        customerId,
        amount,
        status : 'Pending' | 'Approved' | 'Rejected',
        interestRate,
        duration,
    }
    
*/ 