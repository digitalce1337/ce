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
 *  Describes the one of the identities of an user.
 */
@interface GetSocialUserIdentity : NSObject

/**
*  Creates and returns a new GetSocialUserIdentity with an userId and token
*
*  @param provider Id of the provider
*  @param userId   Id of the user for the specified provider
*  @param token    Token of the user for the specified provider. It's a string, provided by the developer
*                  and it will be required by the GetSocial SDK to validate any future intent to add this same
*                  identity to another user.
*
*  @return An instance of GetSocialUserIdentityInfo with the specified parameters
*/
+ (instancetype)identityWithProvider:(GetSocialProvider)provider userId:(NSString *)userId token:(NSString *)token;

/**
 *  Creates and returns a new GetSocialUserIdentity with a token
 *
 *  @param provider Id of the provider
 *  @param token    Token of the user for the specified provider
 *
 *  @return An instance of GetSocialUserIdentityInfo with the specified parameters
 */
+ (instancetype)identityWithProvider:(GetSocialProvider)provider token:(NSString *)token;

/**
 *  Creates and returns a new GetSocialUserIdentity with token for Facebook
 *
 *  @param token Facebook token of the user
 *
 *  @return An instance of GetSocialUserIdentityInfo with the specified parameters
 */
+ (instancetype)facebookIdentityWithToken:(NSString *)token;

@end
