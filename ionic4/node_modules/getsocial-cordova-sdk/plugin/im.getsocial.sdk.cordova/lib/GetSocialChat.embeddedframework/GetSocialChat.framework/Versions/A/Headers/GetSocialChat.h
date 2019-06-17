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
#import "GetSocialChatConfigurationProperties.h"
#import "GetSocialChatListViewBuilder.h"
#import "GetSocialChatViewBuilder.h"

/**
 *  The GetSocial Singleton provides the main entry point for all the social features in the Core module
 */
@interface GetSocialChat : NSObject

#pragma mark - Singleton
/** @name Singleton */

/**
 *  Gets the shared instance of GetSocialChat
 *
 *  @return GetSocialChat instance
 */
+ (instancetype)sharedInstance;

#pragma mark - Properties
/** @name Properties */

/**
 *  Gets number of unread conversations
 */
@property(nonatomic, readonly) NSInteger unreadConversationsCount;

/**
 *  Gets if the Chat Module is enabled
 */
@property(nonatomic, readonly) BOOL isEnabled;

/**
 *  Registers a block to get updates on the notifications
 *
 *  @param onChatNotificationsChangeHandler Block called when the unread conversations count changes.
 */
- (void)setOnChatNotificationsChangeHandler:(void (^)(NSInteger unreadConversationsCount))onChatNotificationsChangeHandler;

/**
 *  Creates chat view builder used to open the Chat View.
 *
 *  @param userId Id of the user to chat with
 *
 *  @return  An instance of GetSocialChatViewBuilder
 */
- (GetSocialChatViewBuilder *)createChatViewForUserId:(NSString *)userId;

/**
 *  Creates chat view builder used to open the Chat View.
 *
 *  @param userId     Id of the user to chat with
 *  @param providerId Id of the external provider
 *
 *  @return An instance of GetSocialChatViewBuilder
 */
- (GetSocialChatViewBuilder *)createChatViewForUserId:(NSString *)userId onProvider:(NSString *)providerId;

/**
 *  Creates chat view builder used to open the Chat View.
 *
 *  @param roomName Name of the chat room
 *
 *  @return An instance of GetSocialChatViewBuilder
 */
- (GetSocialChatViewBuilder *)createChatViewForRoomName:(NSString *)roomName;

/**
 *  Creates chat list view builder used to open the Chat List View.
 *
 *  @return An instance of GetSocialChatListViewBuilder
 */
- (GetSocialChatListViewBuilder *)createChatListView;

@end
