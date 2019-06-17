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

#import "GetSocialViewBuilder.h"

/**
 *  Provides a way to build a view to show Notifications
 *  Should be created only by calling `[[GetSocial sharedInstance] createNotificationsView]`
 */
@interface GetSocialSmartInviteViewBuilder : GetSocialViewBuilder

/**
 *  Get/Set the subject to be use on the Smart Invite
 */
@property(nonatomic, strong) NSString *subject;

/**
 *  Get/Set the text to be use on the Smart Invite
 */
@property(nonatomic, strong) NSString *text;

/**
 *  Get/Set a NSDictionary with custom data that will be retrieved by the recipient after the app is installed
 */
@property(nonatomic, strong) NSDictionary *referralData;

/**
 *  Get/Set the image to be use on the Smart Invite if provider supports it
 */
@property(nonatomic, strong) UIImage *image;

@end
