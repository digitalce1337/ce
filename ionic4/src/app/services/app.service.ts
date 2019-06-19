import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { ApiService } from '../apikey/api.service';
import { AlertController } from '@ionic/angular';
import { HttpClient } from '@angular/common/http';
import { FileTransfer, FileTransferObject } from '@ionic-native/file-transfer/ngx';
import { Geolocation } from '@ionic-native/geolocation/ngx'; 


@Injectable({
  providedIn: 'root'
})
export class AppService {
  public access_token :string = 'EAAf9qfuOeRABANfYesfffF3eW9hZA4WVZBqFH1at83gIQK4dmv4Bb1t5XBo11SPeNSjUTg7Dk4bBKhHR9rCW3LwG2DZAGd9xdc1fcaYpkb1hR6ue18TfXOYPGgHa3jdnWzMwhO20mRhfZAIb9CTkBuNdRhHOL8ZCETZBy5xq5KbUkk3uYJQ9MiMnv2Ihr0VM9LMxd5xNLxegwY5ypgBLSrpsJbX9wH8x6YVwLWxamKLAZDZD';
  constructor(private store: Storage, private apiKey: ApiService, public alertCtrl: AlertController,
    public http: HttpClient, public filetransfer: FileTransfer, public gloc: Geolocation) { }

  public setemail(email) {
    this.store.set('Email', email);
  }

  public getemail() {
    return new Promise(resolve => {
      this.store.get('Email').then((val) => {
        resolve (val);
      }, err => {
        console.log(err);
      });
    });
  }

  public async presentAlert(header, msg) {
    const alert = await this.alertCtrl.create({
      header,
      subHeader: msg,
      buttons: ['Ok']
    });
    await alert.present();
  }

  public addVeh(email, sn, mn, pd, manu, desc, vtype) {
    return new Promise(resolve => {
      this.http.get(this.apiKey + 'addVehicle?email=' + email + '&sn=' + sn
      + '&mn=' + mn + '&pd=' + pd + '&manu=' + manu + '&desc=' + desc + '&Vtype=' + vtype)
        .subscribe(res => {
          resolve(res);

        }, (err) => {
          console.log(err);
        });
    });
  }

  public GetFleet(email) {
    return new Promise(resolve => {
      this.http.get(this.apiKey + 'getFleet?email=' + email).subscribe(res => {
        resolve(res);
        console.log('heyyyy2');
      }, (err) => {
        console.log(err);
      });
    });
  }

  public getVehicleStatus(email, datetime) {
    return new Promise(resolve => {
      this.http.get(this.apiKey + 'getVehicleStatus?email=' + email + '&datetime=' + datetime).subscribe(res => {
        resolve(res);

      }, (err) => {
        console.log(err);
      });
    });
  }


  public getOperatorList(access_token, email) {
    return new Promise(resolve => {
      this.http.get(this.apiKey + 'getOperatorList?email=' + email + '&access_token=' + access_token).subscribe(res => {
        resolve(res);
        console.log('Check here next line');
        console.log('access token: ' + access_token);
      }, (err) => {
        console.log(err);
      });
    });
  }


  public getEmail(access_token) {
    console.log('getting email');
    return new Promise(resolve => {
      this.http.get(this.apiKey + 'getEmail?access_token=' + access_token).subscribe((res) => {
        resolve (res);
        console.log('success get email');
      }, err => {
        console.log(err);
      });
    });
  }

  public getVehicleUrl(access_token) {
    console.log('getting vehicle url');
    return new Promise(resolve => {
      this.http.get(this.apiKey + 'getVehicleUrl?access_token=' + access_token).subscribe((res) => {
        resolve (res);
        console.log('Vehicle URL returned');
      }, err => {
        console.log(err);
      });
    });
  }

  public checkEmail(access_token, email) {
    console.log('checking email');
    return new Promise(resolve => {
      this.http.get(this.apiKey + 'checkEmail?access_token=' + access_token + '&email=' + email).subscribe((res) => {
        resolve(res);
        console.log('Check email complete');
      }, err => {
        console.log(err);
      });
    });
  }

  public addOperator(access_token, operator_email, vehicle_type) {
    console.log('adding operator');
    return new Promise(resolve => {
      this.http.get(this.apiKey + 'addOperator?access_token=' + access_token
      + '&operator_email=' + operator_email + '&vehicle_type=' + vehicle_type).subscribe((res) => {
        resolve(res);
        console.log('Operator add success');
      }, err => {
        console.log(err);
      });
    });
  }

  public getOperatorDetails(email, access_token) {
    console.log('Getting operator details');
    return new Promise(resolve => {
      this.http.get(this.apiKey + 'getOperatorDetails?email=' + email + '&access_token=' + access_token).subscribe((res) => {
        resolve(res);
        console.log('Operator details fetched');
        console.log('access token: ' + access_token);
      }, err => {
        console.log(err);
      });
    });
  }

  public getChartData(email, access_token) {
    console.log('Getting Chart Information');
    return new Promise(resolve => {
      this.http.get(this.apiKey + 'getChartData?email=' + email + '&access_token=' + access_token).subscribe((res) => {
        resolve(res);
        console.log('Chart data fetched');
      }, err => {
        console.log(err);
      });
    });
  }

  public getOperatorHomePageUtil(access_token) {
    console.log('Getting HomeOperator Util');
    return new Promise(resolve => {
      this.http.get(this.apiKey + 'getOperatorHomePageUtil?access_token=' + access_token).subscribe((res) => {
        resolve(res);
        console.log('Chart data fetched');
      }, err => {
        console.log(err);
      });
    });
  }

  public getOperatorUtil(email, access_token) {
    console.log('Getting Operator Util');
    return new Promise(resolve => {
      this.http.get(this.apiKey + 'getOperatorUtil?email=' + email + '&access_token=' + access_token).subscribe((res) => {
        resolve(res);
        console.log('Chart data fetched');
      }, err => {
        console.log(err);
      });
    });
  }

  public deleteOperator(email, access_token) {
    console.log('Deleting Operator');
    return new Promise(resolve => {
      this.http.get(this.apiKey + 'deleteOperator?email=' + email + '&access_token=' + access_token).subscribe((res) => {
        resolve(res);
        console.log('Operator Deleted');
      }, err => {
        console.log(err);
      });
    });
  }

  public getOwnerJoblist(access_token) {
    console.log('Getting Owner job list');
    return new Promise(resolve => {
      this.http.get(this.apiKey + 'getOwnerJoblist?access_token=' + access_token).subscribe((res) => {
        resolve(res);
        console.log('Retrieve owner job');
      }, err => {
        console.log(err);
      });
    });
  }

  public retrieveVehPurchaseDate(serial_no, access_token) {
    console.log('Retrieving vehicle purchase date');
    return new Promise(resolve => {
      this.http.get(this.apiKey + 'retrieveVehPurchaseDate?serial_no=' + serial_no + '&access_token=' + access_token).subscribe((res) => {
        resolve(res);
        console.log('retrieved purchase date');
      }, err => {
        console.log(err);
      });
    });
  }

  public retrieveMachineHour(serial_no, access_token) {
    console.log('Retrieving Vehicle Machine Hour');
    return new Promise(resolve => {
      this.http.get(this.apiKey + 'retrieveVehMachineHour?serial_no=' + serial_no + '&access_token=' + access_token).subscribe((res) => {
        resolve(res);
        console.log('Retrieve machine hour');
        console.log('access token: ' + access_token);
      }, err => {
        console.log(err);
      });
    });
  }

  public retrieveMaintenanceCompleted(serial_no, access_token, todaydate) {
    console.log('Retrieving completed servicing');
    return new Promise(resolve => {
      this.http.get(this.apiKey + 'retrieveMaintenanceCompleted?serial_no='
      + serial_no + '&access_token=' + access_token + '&todaydate=' + todaydate).subscribe((res) => {
        resolve(res);
        console.log('Retrieve Completed Maintenance');
      }, err => {
        console.log(err);
      });
    });
  }

  public retrieveMaintenanceUpcoming(serial_no, access_token, todaydate) {
    console.log('Retrieving upcoming service');
    return new Promise(resolve => {
      this.http.get(this.apiKey + 'retrieveMaintenanceUpcoming?serial_no='
      + serial_no + '&access_token=' + access_token + '&todaydate=' + todaydate).subscribe((res) => {
        resolve(res);
        console.log('Retrieve Upcoming Maintenance');
      }, err => {
        console.log(err);
      });
    });
  }

  public retrieveVehicleSchedule(serial_no, access_token) {
    console.log('Retrieving vehicle schedule');
    return new Promise(resolve => {
      this.http.get(this.apiKey + 'retrieveVehicleSchedule?serial_no=' + serial_no + '&access_token=' + access_token).subscribe((res) => {
        resolve(res);
        console.log('Retrieved Vehicle Schedule');
      }, err => {
        console.log(err);
      });
    });
  }

  public retrieveVehicleUtil(serial_no, model_no, access_token) {
    console.log('Retrieving Vehicle Utilization graph');
    return new Promise(resolve => {
      this.http.get(this.apiKey + 'retrieveVehicleUtil?serial_no='
      + serial_no + '&model_no' + model_no + '&access_token=' + access_token).subscribe((res) => {
        resolve(res);
        console.log('Retrieved Vehicle Utilization Graph');
      }, err => {
        console.log(err);
      });
    });
  }

  public addMaintenance(access_token, serial_no, date_from, date_to, location, desc, modelnum) {
    console.log('Adding Vehicle Maintenance');
    return new Promise(resolve => {
      this.http.get(this.apiKey + 'addMaintenance?access_token='
      + access_token + '&serial_no=' + serial_no + '&date_from=' + date_from
      + '&date_to=' + date_to + '&location=' + location + '&desc=' + desc + '&model_no=' + modelnum).subscribe((res) => {
        resolve(res);
        console.log('Vehicle Maintenance Added');
      }, err => {
        console.log(err);
      });
    });
  }

  public retrieveMaintenance(access_token, serial_no) {
    console.log('Retrieving all Vehicle Maintenance');
    return new Promise(resolve => {
      this.http.get(this.apiKey + 'retrieveMaintenance?access_token=' + access_token + '&serial_no=' + serial_no).subscribe((res) => {
        resolve(res);
        console.log('Vehicle All Maintenance Retrieved');
      }, err => {
        console.log(err);
      });
    });
  }

  public deleteMaintenance(access_token, serial_no, date_from, date_to, location, desc) {
    console.log('Deleting one vehicle maintenance');
    return new Promise(resolve => {
      this.http.get(this.apiKey + 'deleteMaintenance?access_token='
      + access_token + '&serial_no=' + serial_no + '&date_from=' +
      date_from + '&date_to=' + date_to + '&location=' + location + '&desc=' + desc).subscribe((res) => {
        resolve(res);
        console.log('Maintenance record deleted');
      }, err => {
        console.log(err);
      });
    });
  }

  public deleteVehicle(access_token, serial_no, model_no) {
    console.log('Deleting vehicle');
    return new Promise(resolve => {
      this.http.get(this.apiKey + 'deleteVehicle?access_token=' + access_token
      + '&serial_no=' + serial_no + '&model_no=' + model_no).subscribe((res) => {
        resolve(res);
        console.log('Vehicle deleted');
      }, err => {
        console.log(err);
      });
    });
  }

  public retrieveCancelledJobs(access_token) {
    console.log('Retrieving Cancelled Jobs');
    return new Promise(resolve => {
      this.http.get(this.apiKey + 'retrieveCancelledJobs?access_token=' + access_token).subscribe((res) => {
        resolve(res);
        console.log('Cancelled Jobs Retrieved');
      }, err => {
        console.log(err);
      });
    });
  }

  public retrievePastJobs(access_token) {
    console.log('Retrieving History Jobs');
    return new Promise(resolve => {
      this.http.get(this.apiKey + 'retrievePastJobs?access_token=' + access_token).subscribe((res) => {
        resolve(res);
        console.log('History Jobs Retrieved');
      }, err => {
        console.log(err);
      });
    });
  }

  public retrieveOngoingJobs(access_token) {
    console.log('Retrieving Ongoing Jobs');
    return new Promise(resolve => {
      this.http.get(this.apiKey + 'retrieveOngoingJobs?access_token=' + access_token).subscribe((res) => {
        resolve(res);
        console.log('Ongoing Jobs Retrieved');
      }, err => {
        console.log(err);
      });
    });
  }

  public retrieveUpcomingJobs(access_token) {
    console.log('Retrieving Upcoming Jobs');
    return new Promise(resolve => {
      this.http.get(this.apiKey + 'retrieveUpcomingJobs?access_token=' + access_token).subscribe((res) => {
        resolve(res);
        console.log('Upcoming Jobs Retrieved');
      }, err => {
        console.log(err);
      });
    });
  }

  public addJob(access_token, payField, datefromField, datetoField, locationField, descField, titleField) {
    console.log('Adding Jobs');
    return new Promise(resolve => {
    this.http.get(this.apiKey + 'addJob?access_token=' + access_token
    + '&payout=' + payField + '&date_from=' + datefromField + '&date_to='
    + datetoField + '&location=' + locationField + '&description=' + descField + '&title=' + titleField).subscribe((res) => {
      resolve(res);
      console.log('Jobs Added');
    }, err => {
      console.log(err);
      });
    });
}

public addJobDetails(access_token, datefromField, datetoField, jid, operator_names, operator_vehicles) {
  console.log('Adding JobsDetails');
  console.log(this.apiKey + 'addJobDetails?access_token=' + access_token + '&date_from=' + datefromField
  + '&date_to=' + datetoField + '&jid=' + jid + '&operator_names=' + operator_names + '&operator_vehicles=' + operator_vehicles);
  return new Promise(resolve => {
  this.http.get(this.apiKey + 'addJobDetails?access_token=' + access_token + '&date_from=' + datefromField
// tslint:disable-next-line: max-line-length
  + '&date_to=' + datetoField + '&jid=' + jid + '&operator_names=' + operator_names + '&operator_vehicles=' + operator_vehicles).subscribe((res) => {
    resolve(res);
    console.log('JobDetails Added');
  }, err => {
    console.log(err);
    });
  });
}

public insertOperatorJob(access_token, jid, operator_names, operator_vehicles) {
  console.log('Adding Operator Jobs');
  console.log(this.apiKey + 'insertOperatorJob?access_token=' + access_token + '&jid=' + jid
  + '&operator_names=' + operator_names + '&operator_vehicles=' + operator_vehicles);
  return new Promise(resolve => {
  this.http.get(this.apiKey + 'insertOperatorJob?access_token=' + access_token + '&jid=' + jid
  + '&operator_names=' + operator_names + '&operator_vehicles=' + operator_vehicles).subscribe((res) => {
    resolve(res);
    console.log('Operator jobs added');
  }, err => {
    console.log(err);
    });
  });
}

public retrieveJobDetails(access_token, jid) {
  console.log('Retrieving job details');
  return new Promise(resolve => {
    this.http.get(this.apiKey + 'retrieveJobDetails?access_token=' + access_token + '&jid=' + jid).subscribe((res) => {
      resolve(res);
      console.log('heyyyy');
      console.log('Job Details Retrieved');
      console.log('jid: ' + jid);

    }, err => {
      console.log(err);
      });
    });
}

public retrieveJobOperators(access_token, jid) {
  console.log('Retrieving job operators');
  return new Promise(resolve => {
    this.http.get(this.apiKey + 'retrieveJobOperators?access_token=' + access_token + '&jid=' + jid).subscribe((res) => {
      resolve(res);

      console.log('Job Operators Retrieved');

    }, err => {
      console.log(err);
      });
    });
}

public updateJobComplete(access_token, jid) {
  console.log('Updating completion of job');
  return new Promise(resolve => {
    this.http.get(this.apiKey + 'updateJobComplete?access_token=' + access_token + '&jid=' + jid).subscribe((res) => {
      resolve(res);
      console.log('Job Update completed');
    }, err => {
      console.log(err);
      });
    });
}

public updateJobCancelled(access_token, jid) {
  console.log('Updating cancellation of job');
  return new Promise(resolve => {
    this.http.get(this.apiKey + 'updateJobCancelled?access_token=' + access_token + '&jid=' + jid).subscribe((res) => {
      resolve(res);
      console.log('Job cancel updated');
    }, err => {
      console.log(err);
      });
  });
}

updateOwnerRole(access_token, role) {
  console.log('Update owner role');
  return new Promise(resolve => {
    this.http.get(this.apiKey + 'updateOwnerRole?access_token=' + access_token + '&role=' + role).subscribe((res) => {
      resolve(res);
      console.log('Update owner role');
    }, err => {
      console.log(err);
      });
    });
}

checkExistingUser(email) {
  console.log('Checking existing user');
  return new Promise(resolve => {
    this.http.get(this.apiKey + 'checkExistingUser?email=' + email).subscribe((res) => {
      resolve(res);
      console.log('Check user done');
    }, err => {
      console.log(err);
    });
  });
}

updateAccessToken(email, access_token, profile_url) {
  console.log('Getting new Access Token');
  return new Promise(resolve => {
    this.http.get(this.apiKey + 'updateAccessToken?email=' + email + '&access_token=' + access_token + '&profile_url='
    + profile_url).subscribe((res) => {
      resolve(res);
      console.log('New access token');
    }, err => {
      console.log(err);
    });
  });
}

addUser(email, access_token, name, profile_url, role) {
  console.log('Adding new user');
  return new Promise(resolve => {
    this.http.get(this.apiKey + 'addUser?email=' + email + '&access_token=' + access_token + '&name='
    + name + '&profile_url=' + profile_url + '&role=' + role).subscribe((res) => {
      resolve(res);
      console.log('User added');
    }, err => {
      console.log(err);
    });
  });
}

addCompany(access_token, company_name, company_add, phone_no, working_days) {
  console.log('Adding company');
  return new Promise(resolve => {
    this.http.get(this.apiKey + 'addCompany?access_token=' + access_token + '&company_name=' + company_name
    + '&company_add=' + company_add + '&phone_no=' + phone_no + '&working_days=' + working_days).subscribe((res) => {
      resolve(res);
      console.log('Company added');
    }, err => {
      console.log(err);
    });
  });
}

getOperatorSchedule(access_token, email) {
  console.log('Getting Operator Calendar');
  return new Promise(resolve => {
    this.http.get(this.apiKey + 'getOperatorSchedule?access_token=' + access_token + '&email=' + email).subscribe((res) => {
      resolve(res);
      console.log('Operator Schedule Retrieved');
    }, err => {
      console.log(err);
    });
  });
}

getOperatorNames(access_token, datefrom, dateto) {
  console.log('Getting Owner\'s operators');
  return new Promise(resolve => {
    this.http.get(this.apiKey + 'getOperatorNames?access_token=' + access_token + '&date_from='
    + datefrom + '&date_to=' + dateto).subscribe((res) => {
      resolve(res);
      console.log('Owner\'s Operators Retrieved');
      console.log('access token: ' + access_token);
    }, err => {
      console.log(err);
    });
  });
}

getJobCards(access_token, jid, no_of_days) {
  console.log('Getting Job Reports');
  return new Promise(resolve => {
    this.http.get(this.apiKey + 'getJobCards?access_token=' + access_token + '&jid=' + jid + '&no_of_days=' + no_of_days).subscribe((res) => {
      resolve(res);
      console.log('Job reports retrieved');
      console.log('jid: ' + jid);
    }, err => {
      console.log(err);
    });
  });
}

getOperatorVehicles(access_token, datefrom, dateto) {
  console.log('Getting Operator\'s vehicles');
  return new Promise(resolve => {
// tslint:disable-next-line: max-line-length
    this.http.get(this.apiKey + 'getOperatorVehicles?access_token=' + access_token + '&date_from=' + datefrom + '&date_to=' + dateto).subscribe((res) => {
      resolve(res);
      console.log('Operator vehicles retrieved');
    }, err => {
      console.log(err);
    });
  });
}
// -------------- Steff Added ----------------------//
public retrievePastJobsOps(access_token) {
  console.log('Retrieving History Jobs - operator');
  return new Promise(resolve => {
    this.http.get(this.apiKey + 'OpsretrievePastJobs?access_token=' + access_token).subscribe((res) => {
      resolve(res);
      console.log('History Jobs Retrieved');
      console.log('access token: ' + access_token);
    }, err => {
      console.log(err);
    });
  });
  // console.log("Retrieving History Jobs - operator");
  // return new Promise(resolve => {
  //   this.http.get(this.apiKey+'retrievePastJobs?access_token='+access_token).subscribe((res) => {
  //     resolve(res);
  //     console.log("History Jobs Retrieved");
  //   }, err => {
  //     console.log(err);
  //   })
  // })
}

public retrieveOngoingJobsOps(access_token) {
  console.log('Retrieving ongoing Jobs - operator');
  return new Promise(resolve => {
    console.log(this.apiKey + 'OpsretrieveOngoingJobsOps?access_token=' + access_token);
    this.http.get(this.apiKey + 'OpsretrieveOngoingJobsOps?access_token=' + access_token).subscribe((res) => {
      resolve(res);
      console.log('Ongoing Jobs Retrieved');
    }, err => {
      console.log(err);
    });
  });
  //   return new Promise(resolve => {
  //   this.http.get(this.apiKey+'retrieveOngoingJobs?access_token='+access_token).subscribe((res) => {
  //     resolve(res);
  //     console.log("Ongoing Jobs Retrieved");
  //   }, err => {
  //     console.log(err);
  //   })
  // })
}

public retrieveUpcomingJobsOps(access_token) {
  console.log('OpsRetrieving ongoing Jobs - operator');
  return new Promise(resolve => {
    this.http.get(this.apiKey + 'OpsretrieveUpcomingJobsOps?access_token=' + access_token).subscribe((res) => {
      resolve(res);
      console.log('Ongoing Jobs Retrieved');
    }, err => {
      console.log(err);
    });
  //   this.http.get(this.apiKey+'retrieveUpcomingJobs?access_token='+access_token).subscribe((res) => {
  //     resolve(res);
  //     console.log("Ongoing Jobs Retrieved");
  //   }, err => {
  //     console.log(err);
  //   })
  });
}


public UploadReportImage(targetPath, options) {

// tslint:disable-next-line: prefer-const
  let url = this.apiKey + 'UpRepImage';

  const fileTransfer: FileTransferObject = this.filetransfer.create();
  fileTransfer.upload(targetPath, encodeURI(url), options).then(data => {
    console.log('Upload Sucess!');
  }, err => {
    console.log('ERROR!');
    console.log(JSON.stringify(err));
  });
}

// ----------------------------------------------------//

public checkRole(access_token) {
  console.log('Retrieving role');
  return new Promise(resolve => {
    this.http.get(this.apiKey + 'checkRole?access_token=' + access_token).subscribe((res) => {
      resolve(res);
      console.log('Role returned');
    }, err => {
      console.log('Something went wrong with checkRole');
      console.log(err);
    });
  });
}

public CheckOTP(otp) {
  console.log('Checking OTP');
  return new Promise(resolve => {
    this.http.get(this.apiKey + 'checkOTP?otp=' + otp).subscribe((res) => {
      resolve(res);
      console.log('OTP CHecked');
    }, err => {
      console.log(err);
    });
  });
}

public OperatorLogin(access_token, otp, phone) {
  console.log('Operator Login');
  return new Promise(resolve => {
    this.http.get(this.apiKey + 'OperatorLogin?access_token=' + access_token + '&phoneno=' + phone + '&otp=' + otp).subscribe((res) => {
      resolve(res);
      console.log('Operator Login Sucess!');
    }, err => {
      console.log(err);
    });
  });
}

public MakeOTP(access_token) {
  console.log('Generating OTP');
  return new Promise(resolve => {
    this.http.get(this.apiKey + 'getOTP?access_token=' + access_token).subscribe((res) => {
      resolve(res);
      console.log('OTP Returned');
    }, err => {
      console.log(err);
    });
  });
}

public OpGetvehType(access_token, jid) {
  console.log('Getting Veh Type');
  return new Promise(resolve => {
    this.http.get(this.apiKey + 'opgetvehtype?access_token=' + access_token + '&JID=' + jid).subscribe((res: any) => {
      resolve(res);
      console.log('Vehicle Type retrieved sucessfully');
      console.log(res);
      console.log(res.vehicle_type);
    }, err => {
      console.log(err);
    });
  });
}

public InsertReport(jid, access_token, rtype, img, desc, loc, faults) {
  console.log('Inserting Report');
  return new Promise(resolve => {
    this.http.get(this.apiKey + 'addReport?jid=' + jid + '&access_token=' + access_token + '&rtype=' + rtype
    + '&imgloc=' + img + '&Desc=' + desc + '&loc=' + loc + '&faults=' + faults).subscribe((res) => {
      resolve(res);
      console.log('Report Added Sucessfully!');
    }, err => {
      console.log(err);
    });
  });
}

public getJobInfo(access_token, jid) {
  console.log('Retrieving job information to edit');
  return new Promise(resolve => {
    this.http.get(this.apiKey + 'getJobInfo?access_token=' + access_token + '&jid=' + jid).subscribe((res) => {
      resolve(res);
      console.log('Job information retrieved');
    }, err => {
      console.log(err);
    });
  });
}

public aple(access_token, jid) {
  console.log('deletefullJobDetails');
  return new Promise(resolve => {
  this.http.get(this.apiKey + 'hello?access_token=' + access_token + '&jid=' + jid).subscribe((res) => {
    resolve(res);
    console.log('hello back from server');
  }, err => {
    console.log(err);
    });
  });
}

public deleteJob(access_token, jid) {
  console.log('deletefullJobDetails');
  return new Promise(resolve => {
  this.http.get(this.apiKey + 'deleteJob?access_token=' + access_token + '&jid=' + jid).subscribe((res) => {
    resolve(res);
    console.log('Deleted rows from fullJobDetails');
  }, err => {
    console.log(err);
    });
  });
}

public updateOperatorJob(access_token, jid, operator_names, operator_vehicles) {
  console.log('Updating Operator Jobs');
  return new Promise(resolve => {
  this.http.get(this.apiKey + 'updateOperatorJob?access_token=' + access_token + '&jid=' + jid + '&operator_names='
  + operator_names + '&operator_vehicles=' + operator_vehicles).subscribe((res) => {
    resolve(res);
    console.log('Operator jobs updated');
  }, err => {
    console.log(err);
    });
  });
}

public updateJob(access_token, payField, datefromField, datetoField, locationField, descField, titleField, jid) {
  console.log('Adding Jobs');
  return new Promise(resolve => {
  this.http.get(this.apiKey + 'updateJob?access_token=' + access_token + '&payout=' + payField + '&date_from=' + datefromField + '&date_to='
  + datetoField + '&location=' + locationField + '&description=' + descField + '&title=' + titleField + '&jid=' + jid).subscribe((res) => {
    resolve(res);
    console.log('Jobs Updated');
  }, err => {
    console.log(err);
    });
  });
}

public getOperatorJoblist(access_token) {
  console.log('Getting Operator job list');
  return new Promise(resolve => {
    this.http.get(this.apiKey + 'getOperatorJoblist?access_token=' + access_token).subscribe((res) => {
      resolve(res);
      console.log('Retrieve operator job');
    }, err => {
      console.log(err);
    });
  });
}

public getvalueList(access_token) {
  return new Promise(resolve => {
    this.http.get(this.apiKey + 'getOperatorJoblist?access_token=' + access_token).subscribe((res) => {
      resolve(res);
    }, err => {
      console.log(err);
    });
  });
}

public UpdateCapabilities(access_token, vehicle_type) {
  console.log('Updating Capabilities');
  return new Promise(resolve => {
    this.http.get(this.apiKey + 'updateCapabilities?access_token=' + access_token + '&vehicle_type=' + vehicle_type).subscribe((res) => {
      resolve(res);
      console.log('Capabilities Updated Sucessfully');
    }, (err) => {
      console.log(err);
    });
  });
}

public getOpCapabilities(access_token) {
  console.log('Getting Capabilities');
  return new Promise(resolve => {
    this.http.get(this.apiKey + 'getOpCapabilities?access_token=' + access_token).subscribe((res) => {
      resolve(res);
      console.log('Capabilities Retrieved');
    }, (err) => {
      console.log(err);
    });
  });
}

public GetCurrentLoc() {
    console.log('Getting GeLocation');
    return new Promise(resolve => {
      this.gloc.getCurrentPosition().then((res) => {
        console.log('Sucessfully gathered Location');
        resolve(res);
      }, err => {
        console.log('err');
        console.log(err);
      });
    });
}

public getMonthlyPay(access_token) {
  return new Promise(resolve => {
    this.http.get(this.apiKey + 'getMonthlyPay?access_token=' + access_token).subscribe(res => {
      resolve(res);
      console.log(res);
      console.log('Monthly pay for chart recieved');
    }, (err) => {
      console.log(err);
    });
  });
}

public getHomeFleetChart(access_token) {
  console.log('Calling from front end to backend');
  return new Promise(resolve => {
    this.http.get(this.apiKey + 'getHomeFleetChart?access_token=' + access_token).subscribe(res => {
      resolve(res);
      console.log(res);
    }, (err) => {
      console.log(err);
    });
  });
}

public getHomeOperatorChart(access_token) {
  console.log('Calling from front end to backend');
  return new Promise(resolve => {
    this.http.get(this.apiKey + 'getHomeOperatorChart?access_token=' + access_token).subscribe(res => {
      resolve(res);
      console.log(res);
    }, (err) => {
      console.log(err);
    });
  });
}
}