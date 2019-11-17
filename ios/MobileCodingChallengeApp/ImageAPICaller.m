//
//  ImageAPICaller.m
//  MobileCodingChallengeApp
//
//  Created by Rohit Garg on 08/11/19.
//  Copyright © 2019 Facebook. All rights reserved.
//

#import <Foundation/Foundation.h>
#import "React/RCTBridgeModule.h"

@interface RCT_EXTERN_MODULE(ImageAPICaller, NSObject)

RCT_EXTERN_METHOD(fetchImagesDataFromAPI: (RCTPromiseResolveBlock)resolve
                  failure:(RCTPromiseRejectBlock)reject)

@end
