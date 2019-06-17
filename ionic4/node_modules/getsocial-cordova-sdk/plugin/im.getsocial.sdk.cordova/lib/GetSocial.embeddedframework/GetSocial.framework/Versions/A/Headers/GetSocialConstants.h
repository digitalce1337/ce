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

#ifndef GetSocialSDK_GetSocialConstants_h
#define GetSocialSDK_GetSocialConstants_h

/** Constants for the Invite friends listener  */
typedef NS_ENUM(NSInteger, GetSocialInviteFriendsStatus) {
    /**Invite is sent */
    GetSocialInviteFriendsStatusSent = 1,
    /**Invite is created but there is no information if it is sent  */
    GetSocialInviteFriendsStatusIntent = 2,
};

/** Constants for the Leaderboard score types  */
typedef NS_ENUM(NSInteger, GetSocialLeaderboardScoreType) {
    /** Contains the scores of all the users */
    GetSocialLeaderboardScoreTypeWorld = 1,
    /** Contains the scores of the users that you follow */
    GetSocialLeaderboardScoreTypeFollowing = 2,
    /** Contains a subset of all users scores*/
    GetSocialLeaderboardScoreTypeOthers = 3
};

/** Constants for the Leaderboard score direction  */
typedef NS_ENUM(NSInteger, GetSocialLeaderboardDirectionType) {
    /** The type is ASC */
    GetSocialLeaderboardDirectionTypeASC = 1,
    /** The type is DESC */
    GetSocialLeaderboardDirectionTypeDESC = 2
};

/** Constants for the GetSocial Actions  */
typedef NS_ENUM(NSInteger, GetSocialAction) {
    /** Open Activities */
    GetSocialActionOpenActivities = 1,
    /** Open Activity */
    GetSocialActionOpenActivityDetails = 2,
    /** Post Activity */
    GetSocialActionPostActivity = 3,
    /** Post comment */
    GetSocialActionPostComment = 4,
    /** Like Activity */
    GetSocialActionLikeActivity = 5,
    /** Like comment */
    GetSocialActionLikeComment = 6,
    /** Open Chat List */
    GetSocialActionOpenChatList = 7,
    /** Open Private Chat */
    GetSocialActionOpenPrivateChat = 8,
    /** Send Private Chat message */
    GetSocialActionSendPrivateChatMessage = 9,
    /** Open Public Chat */
    GetSocialActionOpenPublicChat = 10,
    /** Send Public Chat message */
    GetSocialActionSendPublicChatMessage = 11,
    /** Open Notifications */
    GetSocialActionOpenNotifications = 12,
    /** Open Friends List */
    GetSocialActionOpenFriendsList = 13,
    /** Open Smart Invites */
    GetSocialActionOpenSmartInvites = 14
};

/** Constants for the User Generated Content Source  */
typedef NS_ENUM(NSInteger, GetSocialContentSource) {
    /** Activity */
    GetSocialContentSourceActivity = 1,
    /** Activity comment */
    GetSocialContentSourceComment = 2,
    /** Private chat message */
    GetSocialContentSourcePrivateChatMessage = 3,
    /** Public chat message */
    GetSocialContentSourcePublicChatMessage = 4
};

typedef NSString *GetSocialProvider;

/**
 * The typedef defines the signature of a block that is called when an operation
 * completes.
 */
typedef void (^GetSocialCompleteCallback)();

/**
 * The typedef defines the signature of a block that is called when an operation
 * completes.
 */
typedef void (^GetSocialSuccessCallback)();

/**
 * The typedef defines the signature of a block that is called when an operation
 * fails.
 * @param error is the error that caused the failure.
 */
typedef void (^GetSocialErrorCallback)(NSError *error);

/**
 *  Constants for the different User Identity conflict resolution strategies
 */
typedef NS_ENUM(NSUInteger, GetSocialAddIdentityConflictResolutionStrategy) {
    /**
     *  Current user is kept and the new identity won't be added since it already belongs to the remote user
     */
    GetSocialAddIdentityConflictResolutionStrategyCurrent = 1,
    /**
     *  Current user is replaced with remote user
     */
    GetSocialAddIdentityConflictResolutionStrategyRemote = 2
};

/**
 *  Constants for the different User Identity conflict resolution strategies
 */
typedef NS_ENUM(NSUInteger, GetSocialAddIdentityResult) {
    /**
     *  Identity was successfully added without a conflict
     */
    GetSocialAddIdentityResultIdentityAdded = 1,
    /**
     *  Current user is kept and the new identity won't be added since it already belongs to the remote user
     */
    GetSocialAddIdentityResultConflictResolvedWithCurrent = 2,
    /**
     *  Current user is replaced with remote user
     */
    GetSocialAddIdentityResultConflictResolvedWithRemote = 3
};

/**
 * The typedef defines the signature of a block that is called when an operation
 * completes.
 */
typedef void (^GetSocialUserIdentityCompleteCallback)(GetSocialAddIdentityResult result);

/**
 *  The typedef defines the signature of a block that should be called to resolve a conflict while adding an identity to an user.
 *
 *  @param strategy Strategy (GetSocialAddIdentityConflictResolutionStrategy) to use to solve the conflict
 */
typedef void (^GetSocialUserIdentityResolveConflictCallback)(GetSocialAddIdentityConflictResolutionStrategy strategy);

/**
 *  The typedef defines the signature of a block that should be called to decide if a specific user action should be performed
 *
 *  @param shouldPerformAction YES to perform the user action. NO to ignore it.
 */
typedef void (^GetSocialFinalizeActionCallback)(BOOL shouldPerformAction);

/** Constants that define the open/close animation */
typedef NS_ENUM(NSInteger, GetSocialAnimationStyle) {
    /** No Animation */
    GetSocialAnimationStyleNone = 0,
    /** Animation scales the element In and Out */
    GetSocialAnimationStyleScale = 1,
    /** Animation fades the element In and Out */
    GetSocialAnimationStyleFade = 2,
    /** Animation fades and scales the element In and Out */
    GetSocialAnimationStyleFadeAndScale = 3
};

/** Constants that define the source of the event */
typedef NS_ENUM(NSInteger, GetSocialSourceView) {
    /** Notifications View */
    GetSocialSourceViewNotifications = 1,
    /** Chat List View */
    GetSocialSourceViewChatList = 2,
    /** Chat View */
    GetSocialSourceViewChat = 3,
    /** Chat Room View */
    GetSocialSourceViewChatRoom = 4,
    /** Activities View */
    GetSocialSourceViewActivities = 5,
    /** Comments View */
    GetSocialSourceViewComments = 6,
    /** List of Likes View */
    GetSocialSourceViewLikeList = 7,
    /** Following List of Users View */
    GetSocialSourceViewFollowingList = 8
};

extern NSString *const kGetSocialScaleModeScaleWithScreenSize;
extern NSString *const kGetSocialScaleModeConstantPhysicalSize;

extern NSString *const kGetSocialProviderFacebookMessenger;
extern NSString *const kGetSocialProviderFacebook;
extern NSString *const kGetSocialProviderGooglePlus;
extern NSString *const kGetSocialProviderGeneric;
extern NSString *const kGetSocialProviderEmail;
extern NSString *const kGetSocialProviderSMS;
extern NSString *const kGetSocialProviderLink;
extern NSString *const kGetSocialProviderTwitter;
extern NSString *const kGetSocialProviderKik;
extern NSString *const kGetSocialProviderKakao;
extern NSString *const kGetSocialProviderWhatsapp;

extern NSString *const kGetSocialImage;
extern NSString *const kGetSocialText;
extern NSString *const kGetSocialSubject;
extern NSString *const kGetSocialReferralData;

#define kGetSocialAuthPermissionsFacebook @[ @"email", @"user_friends" ]

extern NSString *const kGetSocialAppInviteUrlPlaceholder;
extern NSString *const kGetSocialAppNamePlaceholder;
extern NSString *const kGetSocialAppIconUrlPlaceholder;
extern NSString *const kGetSocialAppPackageNamePlaceholder;
extern NSString *const kGetSocialUserDisplayNamePlaceholder;

extern NSString *const GetSocialViewOpenNotification;
extern NSString *const GetSocialViewCloseNotification;

extern NSString *const GetSocialUserIdentityUpdatedNotification;

#endif
