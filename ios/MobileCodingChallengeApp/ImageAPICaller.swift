//
//  ImageAPICaller.swift
//  MobileCodingChallengeApp
//
//  Created by Rohit Garg on 08/11/19.
//  Copyright © 2019 Facebook. All rights reserved.
//

import Foundation

@objc(ImageAPICaller)
class ImageAPICaller: NSObject {

  private var count = 0
  private let url = URL(string: "https://5dbfc096e295da001400b90d.mockapi.io/codingChallenge/v1/images")!
  
  @objc
  func fetchImagesDataFromAPI(_ resolve: @escaping RCTPromiseResolveBlock,
                              failure reject: @escaping RCTPromiseRejectBlock) -> Void {
    
    let task = URLSession.shared.dataTask(with: url) { (result) in
      switch result {
      case .success(let data):
        // Handle Response Data
        do {
          let json = try JSONSerialization.jsonObject(with: data, options: [])
          resolve(json)
        } catch {
          print("JSON error: \(error.localizedDescription)")
        }
        break
      case .failure(let error):
        // Handle Error
        print(error.localizedDescription)
        break
      }
    }
    task.resume()
  }
  
  /// this is required by RN Native Modules
   @objc
   static func requiresMainQueueSetup() -> Bool {
     return false // to allow class initialization on background thread
   }
  
}

extension URLSession {
  func dataTask(with url: URL, result: @escaping (Result<Data, Error>) -> Void) -> URLSessionDataTask {
    return dataTask(with: url) { (data, response, error) in
      if let error = error {
        result(.failure(error))
        return
      }
      guard let data = data else {
        let error = NSError(domain: "error", code: 0, userInfo: nil)
        result(.failure(error))
        return
      }
      result(.success(data))
    }
  }
}
