/* This file is auto-generated by SST. Do not edit. */
/* tslint:disable */
/* eslint-disable */
import "sst"
export {}
declare module "sst" {
  export interface Resource {
    "MyFunction": {
      "name": string
      "type": "sst.aws.Function"
      "url": string
    }
    "MyRedis": {
      "host": string
      "password": string
      "port": number
      "type": "sst.aws.Redis"
      "username": string
    }
    "MyVpc": {
      "bastion": string
      "type": "sst.aws.Vpc"
    }
  }
}
