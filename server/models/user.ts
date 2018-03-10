/**
 * Copyright 2017-present, Facebook, Inc. All rights reserved.
 *
 * This source code is licensed under the license found in the
 * LICENSE file in the root directory of this source tree.
 */

/**
 * User Model
 * @class User
 */
export default class User {
  username
  password
  messengerId
  constructor(username, password, messengerId) {
    this.username = username
    this.password = password
    this.messengerId = messengerId
  }
}
