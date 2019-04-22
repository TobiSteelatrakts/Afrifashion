import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the ServicesCmsapiProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ServicesCmsapiProvider {

  constructor(public http: HttpClient) {
    console.log('Hello ServicesCmsapiProvider Provider');
  }



  getallcategories () {
    // , { responseType: 'json' }
    return new Promise(resolve => {
      this.http.get('http://cmsapi.firstmarinatrust.com/api/category'
      ).subscribe(data => {
        resolve(data);
      }, err => {
        console.log(err);
        return resolve(err);
      });
    });
  }

  getallbanners () {
    // , { responseType: 'json' }
    return new Promise(resolve => {
      this.http.get('http://cmsapi.firstmarinatrust.com/api/banner'
      ).subscribe(data => {
        resolve(data);
      }, err => {
        console.log(err);
        return resolve(err);
      });
    });
  }
// http://cmsapi.firstmarinatrust.com
  getproductbycategory (id) {
    // , { responseType: 'json' }
    return new Promise(resolve => {
      this.http.get('http://cmsapi.firstmarinatrust.com/api/misc/pc/' + id
      ).subscribe(data => {
        resolve(data);
      }, err => {
        console.log(err);
        return resolve(err);
      });
    });
  }

  orderproduct (product_id, admin_id, user_id) {
       // , { responseType: 'json' }
       return new Promise(resolve => {
        this.http.post('http://cmsapi.firstmarinatrust.com/api/ordersinfo/placeorder', {product_id: product_id, user_id: user_id, admin_id: admin_id}
        ).subscribe(data => {
          resolve(data);
        }, err => {
          console.log(err);
          return resolve(err);
        });
      });
  }

  userorders (user_id) {
    // , { responseType: 'json' }
    return new Promise(resolve => {
     this.http.post('http://cmsapi.firstmarinatrust.com/api/ordersinfo/getalluserorder', {user_id: user_id}
     ).subscribe(data => {
       resolve(data);
     }, err => {
       console.log(err);
       return resolve(err);
     });
   });
}


addproduct (image) {
  // , { responseType: 'json' }
  return new Promise(resolve => {
    this.http.post('http://cmsapi.firstmarinatrust.com/api/products/product',
   image
    ).subscribe(data => {
      resolve(data);
    }, err => {
      console.log(err);
      return resolve(err);
    });
  });
}


fetchadminproducts (admin_id) {
  // , { responseType: 'json' }
  return new Promise(resolve => {
    this.http.post('http://cmsapi.firstmarinatrust.com/api/ordersinfo/getalladminproducts',
   {admin_id: admin_id}
    ).subscribe(data => {
      resolve(data);
    }, err => {
      console.log(err);
      return resolve(err);
    });
  });
}

fetchalladminbookings (admin_id) {
  // , { responseType: 'json' }
  return new Promise(resolve => {
    this.http.post('http://cmsapi.firstmarinatrust.com/api/ordersinfo/getalladminorder',
   {admin_id: admin_id}
    ).subscribe(data => {
      resolve(data);
    }, err => {
      console.log(err);
      return resolve(err);
    });
  });
}

getadmin (id) {
  // , { responseType: 'json' }
  return new Promise(resolve => {
    this.http.post('http://cmsapi.firstmarinatrust.com/api/authadmin/admin',
   {id: id}
    ).subscribe(data => {
      resolve(data);
    }, err => {
      console.log(err);
      return resolve(err);
    });
  });
}

resetuserpassword (email, newpassword) {
  // , { responseType: 'json' }
  return new Promise(resolve => {
    this.http.post('http://cmsapi.firstmarinatrust.com/api/authuser/userpassword',
    {email: email, newpassword: newpassword}
    ).subscribe(data => {
      resolve(data);
    }, err => {
      console.log(err);
      return resolve(err);
    });
  });
}

resetadminpassword (email, newpassword) {
  // , { responseType: 'json' }
  return new Promise(resolve => {
    this.http.post('http://cmsapi.firstmarinatrust.com/api/authadmin/adminpassword',
   {email: email, newpassword: newpassword}
    ).subscribe(data => {
      resolve(data);
    }, err => {
      console.log(err);
      return resolve(err);
    });
  });
}


resetusernumber (number, newnumber) {
  // , { responseType: 'json' }
  return new Promise(resolve => {
    this.http.post('http://cmsapi.firstmarinatrust.com/api/authuser/usernumber',
    {number: number, newnumber: newnumber}
    ).subscribe(data => {
      resolve(data);
    }, err => {
      console.log(err);
      return resolve(err);
    });
  });
}

resetuseremail (email, newemail) {
  // , { responseType: 'json' }
  return new Promise(resolve => {
    this.http.post('http://cmsapi.firstmarinatrust.com/api/authuser/useremail',
    {email: email, newemail: newemail}
    ).subscribe(data => {
      resolve(data);
    }, err => {
      console.log(err);
      return resolve(err);
    });
  });
}


getuser (id) {
  // , { responseType: 'json' }
  return new Promise(resolve => {
    this.http.post('http://cmsapi.firstmarinatrust.com/api/authuser/user',
   {id: id}
    ).subscribe(data => {
      resolve(data);
    }, err => {
      console.log(err);
      return resolve(err);
    });
  });
}

getsuper (id) {
  // , { responseType: 'json' }
  return new Promise(resolve => {
    this.http.get('http://cmsapi.firstmarinatrust.com/api/authsuper/super/'+ id,

    ).subscribe(data => {
      resolve(data);
    }, err => {
      console.log(err);
      return resolve(err);
    });
  });
}



loginnadmin (email, password) {
  // , { responseType: 'json' }
  return new Promise(resolve => {
    this.http.post('http://cmsapi.firstmarinatrust.com/api/authadmin/login',
   {email: email, password: password}
    ).subscribe(data => {
      resolve(data);
    }, err => {
      console.log(err);
      return resolve(err);
    });
  });
}

loginsuper (email, password) {
  // , { responseType: 'json' }
  return new Promise(resolve => {
    this.http.post('http://cmsapi.firstmarinatrust.com/api/superrestrict/loginsuper',
   {email: email, password: password}
    ).subscribe(data => {
      resolve(data);
    }, err => {
      console.log(err);
      return resolve(err);
    });
  });
}
signupsuper (name, email, password) {
  // , { responseType: 'json' }
  return new Promise(resolve => {
    this.http.post('http://cmsapi.firstmarinatrust.com/api/authsuper/super',
   {name: name, email: email, password: password}
    ).subscribe(data => {
      resolve(data);
    }, err => {
      console.log(err);
      return resolve(err);
    });
  });
}
signupnadmin (name, email, number, address, password) {
  // , { responseType: 'json' }
  return new Promise(resolve => {
    this.http.post('http://cmsapi.firstmarinatrust.com/api/authadmin/signup',
    {name: name, email: email, number: number, address: address, password: password}
    ).subscribe(data => {
      resolve(data);
    }, err => {
      console.log(err);
      return resolve(err);
    });
  });
}
loginuser (email, password) {
  // , { responseType: 'json' }
  // http://cmsapi.firstmarinatrust.com
  return new Promise(resolve => {
    this.http.post('http://cmsapi.firstmarinatrust.com/api/authuser/login',
    {email: email, password: password}
    ).subscribe(data => {
      resolve(data);
    }, err => {
      console.log(err);
      return resolve(err);
    });
  });
}
signupuser (email, name, address, number, password) {
  // , { responseType: 'json' }
  return new Promise(resolve => {
    this.http.post('http://cmsapi.firstmarinatrust.com/api/authuser/signup',
    {email: email, password: password, name: name, address: address,number: number}
    ).subscribe(data => {
      resolve(data);
    }, err => {
      console.log(err);
      return resolve(err);
    });
  });
}

///admin acees etc

getalladmin () {
  // , { responseType: 'json' }
  return new Promise(resolve => {
    this.http.get('http://cmsapi.firstmarinatrust.com/api/superrestrict/getalladmin',
    ).subscribe(data => {
      resolve(data);
    }, err => {
      console.log(err);
      return resolve(err);
    });
  });
}


deleteproduct (id) {
  // , { responseType: 'json' }
  return new Promise(resolve => {
    this.http.delete('http://cmsapi.firstmarinatrust.com/api/products/product/'+id,
    ).subscribe(data => {
      resolve(data);
    }, err => {
      console.log(err);
      return resolve(err);
    });
  });
}

updateproduct (id, productname, productprice) {
  // , { responseType: 'json' }
  return new Promise(resolve => {
    this.http.put('http://cmsapi.firstmarinatrust.com/api/products/product/'+id,
     {productname: productname, productprice: productprice}
    ).subscribe(data => {
      resolve(data);
    }, err => {
      console.log(err);
      return resolve(err);
    });
  });
}

disableadminaccess (id, access) {
  // , { responseType: 'json' }
  return new Promise(resolve => {
    this.http.post('http://cmsapi.firstmarinatrust.com/api/superrestrict/disableadmin',
    {id: id, access: access}
    ).subscribe(data => {
      resolve(data);
    }, err => {
      console.log(err);
      return resolve(err);
    });
  });
}

deleteadmin (id) {
  // , { responseType: 'json' }
  return new Promise(resolve => {
    this.http.post('http://cmsapi.firstmarinatrust.com/api/superrestrict/deleteadmin',
    {id: id}
    ).subscribe(data => {
      resolve(data);
    }, err => {
      console.log(err);
      return resolve(err);
    });
  });
}

/// user access etc

getalluser () {
  // , { responseType: 'json' }
  return new Promise(resolve => {
    this.http.get('http://cmsapi.firstmarinatrust.com/api/superrestrict/getalluser',
    ).subscribe(data => {
      resolve(data);
    }, err => {
      console.log(err);
      return resolve(err);
    });
  });
}

disableuseraccess (id, access) {
  // , { responseType: 'json' }
  return new Promise(resolve => {
    this.http.post('http://cmsapi.firstmarinatrust.com/api/superrestrict/disableuser',
    {id: id, access: access}
    ).subscribe(data => {
      resolve(data);
    }, err => {
      console.log(err);
      return resolve(err);
    });
  });
}

deleteuser (id) {
  // , { responseType: 'json' }
  return new Promise(resolve => {
    this.http.post('http://cmsapi.firstmarinatrust.com/api/superrestrict/deleteuser',
    {id: id}
    ).subscribe(data => {
      resolve(data);
    }, err => {
      console.log(err);
      return resolve(err);
    });
  });
}


suggestproduct (id) {
  // , { responseType: 'json' }
  return new Promise(resolve => {
    this.http.get('http://cmsapi.firstmarinatrust.com/api/misc/suggestproduct/'+ id,
    ).subscribe(data => {
      resolve(data);
    }, err => {
      console.log(err);
      return resolve(err);
    });
  });
}


suggestmany (id) {
  return new Promise(resolve => {
    this.http.get('http://cmsapi.firstmarinatrust.com/api/misc/suggestmany/'+ id,
    ).subscribe(data => {
      resolve(data);
    }, err => {
      console.log(err);
      return resolve(err);
    });
  });
}

myimages =[

  {
    id: 1,
  name: 'Shoes',

},
{
  id: 2,
  name: 'Clothings',

},


{
  id: 3,
  name: 'Makeup',

},
{
  id: 4,
  name: 'Bags',

},
{
  id: 5,
  name: 'Fabrics',

},
{
  id: 6,
  name: 'Decorations',

}


];

getimgs(){

  return this.myimages;





    }

  //serach
    filterItems(searchTerm){

      return this.myimages.filter((item) => {
          return item.name.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1;
      });

  }



}
