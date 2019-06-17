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

@class GetSocialUserIdentityInfo;

/**
 *  Describes an user.
 */
@interface GetSocialUser : NSObject

#pragma mark - User details
/**
 *  Unique Identifier of the user.
 */
@property(nonatomic, readonly) NSString *guid;

/**
 *  Display name of the user.
 */
@property(nonatomic, readonly) NSString *displayName;

/**
 *  The Url of the Avatar of the user. Can be nil if no avatar Url is available.
 */
@property(nonatomic, readonly) NSString *avatarUrl;

#pragma mark - User Identity

/**
 *  The user identity status. YES if the is user has no identities, NO if the user has at least one identity
 */
@property(nonatomic, readonly) BOOL isAnonymous;

/**
 *  Array of providers for which the user has identities.
 */
@property(nonatomic, readonly) NSArray *identities;

/**
 *  Returns if the user has an identity for the specified provider
 *
 *  @param provider Id of the provider
 *
 *  @return YES if the is user has an identity for the provider, otherwise NO
 */
- (BOOL)hasIdentityForProvider:(GetSocialProvider)provider;

/**
 *  Gets the Id of the user for the specified provider.
 *
 *  @param provider Id of the provider
 *
 *  @return Id of the user for the specified provider
 */
- (NSString *)userIdForProvider:(GetSocialProvider)provider;

@end
