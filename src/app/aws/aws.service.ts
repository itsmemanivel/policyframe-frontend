import { Injectable } from '@angular/core';
import * as AWS from 'aws-sdk/global';
import * as S3 from 'aws-sdk/clients/s3';


import { Observable } from 'rxjs/Observable';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AwsService {



  credentials = new S3({

      accessKeyId: 'AKIAJ2NMR5CSVHYBIAFA',
      secretAccessKey: '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',
      region: 'ap-south-1'
    });

  Bucket = 'policyframe-static-contents';
  constructor() { }





  /**
 * ----------------------------------------------------
 * ImageService  aws
 * ----------------------------------------------------
 * @method uploadImge
 */


  uploadImge(file):any {

  	const contentType = file.type;
  	const bucket = new S3({

      accessKeyId: 'AKIAJ2NMR5CSVHYBIAFA',
      secretAccessKey: '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',
      region: 'ap-south-1'
    });


  	const params ={

  		Bucket: 'policyframe-static-contents',
  		Key: 'images/' + file.name,
  		Body: file,
  		ACL: 'public-read',
  		ContentType: contentType,
        
  	};

return Observable.create(observer =>{
  	bucket.upload(params, function(err, data){
  		if(err){
  			console.log('There was an error uploading your file:', err);
  			return false;

  		}
  		// console.log('Successfully uploaded file.', data);
  		observer.next(data);
  		observer.complete();
  		// return true;
  	})


   });
  }


    /**
 * ----------------------------------------------------
 * ebookService  aws
 * ----------------------------------------------------
 * @method uploadEbook
 */

uploadEbook(file):any {

    const contentType = file.type;
    const bucket = this.credentials


    const params ={

      Bucket: this.Bucket,
      Key: 'ebooks/' + file.name,
      Body: file,
      ACL: 'public-read',
      ContentType: contentType,
        
    };

return Observable.create(observer =>{
    bucket.upload(params, function(err, data){
      if(err){
        console.log('There was an error uploading your file:', err);
        return false;

      }
      console.log('Successfully uploaded file.', data);
      observer.next(data);
      observer.complete();
      // return true;
    })


   });
  }







   /**
 * ----------------------------------------------------
 * PPTService  aws
 * ----------------------------------------------------
 * @method uploadPPT
 */

uploadPPT(file):any {

    const contentType = file.type;
    const bucket = this.credentials


    const params ={

      Bucket: this.Bucket,
      Key: 'PPT/' + file.name,
      Body: file,
      ACL: 'public-read',
      ContentType: contentType,
        
    };

return Observable.create(observer =>{
    bucket.upload(params, function(err, data){
      if(err){
        console.log('There was an error uploading your file:', err);
        return false;

      }
      console.log('Successfully uploaded file.', data);
      observer.next(data);
      observer.complete();
      // return true;
    })


   });
  }





   /**
 * ----------------------------------------------------
 * templateService  aws
 * ----------------------------------------------------
 * @method uploadTemplate
 */

uploadTemplate(file):any {

    const contentType = file.type;
    const bucket = this.credentials


    const params ={

      Bucket: this.Bucket,
      Key: 'templates/' + file.name,
      Body: file,
      ACL: 'public-read',
      ContentType: contentType,
        
    };

return Observable.create(observer =>{
    bucket.upload(params, function(err, data){
      if(err){
        console.log('There was an error uploading your file:', err);
        return false;

      }
      console.log('Successfully uploaded file.', data);
      observer.next(data);
      observer.complete();
      // return true;
    })


   });
  }



}
