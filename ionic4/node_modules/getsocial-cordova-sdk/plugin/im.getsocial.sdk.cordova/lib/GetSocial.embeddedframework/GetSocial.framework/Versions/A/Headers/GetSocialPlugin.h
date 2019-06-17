/*
 *    	Copyright 2015-2016 GetSocial B.V.
 *
 *	Licensed under the Apache License, Version 2.0 (the "License");
 *	you may not use this file except in compliance with the License.
 *	You may obtain a copy of the License at
 *
 *    	http://www.apache.org/licenses/LICENSE-2.0
 *
 *	Unless required by applicable law or agreed to in writing, software
 *	distributed under the License is distributed on an "AS IS" BASIS,
 *	WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *	See the License for the specific language governing permissions and
 *	limitations under the License.
 */

#import <Foundation/Foundation.h>
#import "GetSocialConstants.h"
/**
 * This protocol provides the base protocol for all plugins of by the GetSocial SDK.
 */

@interface GetSocialPlugin : NSObject

/** The name of the plugin.*/
@property (nonatomic, strong) id title;

/** The description of the plugin.*/
@property (nonatomic, strong) id details;

/** The image of the plugin.*/
@property (nonatomic, strong) NSString* imageUrl;

/** If the plugin is enabled.*/
@property (nonatomic) BOOL enabled;

/** The sort order of the plugin.*/
@property (nonatomic) NSInteger displayOrder;

/** If the plugin is available for the current device.*/
- (BOOL) isAvailableForDevice;

@end
