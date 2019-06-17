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

/** Describes a Leaderboard meta data.*/
@interface GetSocialLeaderboardMetaData : NSObject {
    
}

/** The unique deveoper Id of the Leaderboard.*/
@property(nonatomic,strong) NSString *leaderboardID;

/** The name of the Leaderboard.*/
@property(nonatomic,strong) NSString *name;

/** The units of the score (example: points, coins, etc).*/
@property(nonatomic,strong) NSString *unit;

/** The direction of the Leaderboard (ASC,DESC).*/
@property(nonatomic,assign) GetSocialLeaderboardDirectionType direction;

/** The format of the score (example: number).*/
@property(nonatomic,strong) NSString *format;

/** Shows if the Leaderboard is published.*/
@property(nonatomic) BOOL published;

+ (GetSocialLeaderboardMetaData*) initLeaderboardMetaDataFromJSON:(id) JSON;


@end
