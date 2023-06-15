// users________________________________________________________________
/**
 * @swagger
 * components:
 *   schemas:
 *       User:
 *           type: object
 *           required:
 *              - name
 *              - email
 *              - pass
 *           properties:
 *               name:
 *                   type: string
 *                   description: username of the user
 *               email:
 *                   type: string
 *                   description: The user email
 *               pass:
 *                   type: string
 *                   description: The user password
 *               role:
 *                   type: string
 *                   description: Role of a user
 *               approved:
 *                   type: boolean
 *                   description: If a user is approved by the admin to become a Trainer or not
 *               expertise:
 *                   type: string
 *                   description: Trainer expert in types of shots
 *               address:
 *                   type: string
 *                   description: Location where a user wants to do PhotoShoot
 */

/**
 * @swagger
 * components:
 *   schemas:
 *       Booking:
 *           type: object
 *           properties:
 *               Trainer:
 *                   type: string
 *                   description: Trainer Id that user has booked
 *               Trainee:
 *                   type: string
 *                   description: Trainee id that has booked a Trainer
 *               start_time:
 *                   type: string
 *                   format: date
 *                   description: starting time of the photoshoot
 *               end_time:
 *                   type: string
 *                   format: date
 *                   description: ending time of the photoshoot
 *               status:
 *                   type: string
 *                   description: If booking is accepted rejected or is still pending after booking to a photgrapher
 */
/**
 * @swagger
 * components:
 *   schemas:
 *       Notification:
 *           type: object
 *           properties:
 *               from:
 *                   type: mongoose.Schema.Types.ObjectId
 *                   description: user who wants to send message
 *               to:
 *                   type: mongoose.Schema.Types.ObjectId
 *                   description: user who will recieve message
 *               booking:
 *                   type: mongoose.Schema.Types.ObjectId
 *                   description: booking of who has booked an Trainer
 *               message:
 *                   type: string
 *                   description: message you want to send
 *               created_at:
 *                   type: string
 *                   format: date
 *                   description: timing of the notification created
 */
// /**
//  * @swagger
//  * components:
//  *   schemas:
//  *       Meeting:
//  *           type: object
//  *           properties:
//  *               Trainer:
//  *                   type: string
//  *                   description: user with role Trainer
//  *               meetings:
//  *                   type: Array
//  *                   description: Contains meeting for each users
//  */
// /**
//  * @swagger
//  * components:
//  *   schemas:
//  *       Image:
//  *           type: object
//  *           properties:
//  *               name:
//  *                   type: string
//  *                   description: user's name
//  *               image:
//  *                   type: string
//  *                   data: Buffer
//  *                   description: Sample images of Trainer
//  */
/**
 * @swagger
 * /user/:
 *   get:
 *       summary: To get details of all the registered user in Database
 *       tags: [Users]
 *       requestBody:
 *           required: false
 *           content:
 *               application/json:
 *                   schema:
 *                       $ref: '#/components/schemas/User'
 *       responses:
 *           200:
 *               description: All user Data Successfully fetched
 *               content:
 *                   application/json:
 *                       schema:
 *                           $ref: '#/components/schemas/User'
 *           500:
 *               description: Some server error
 */
/**
 * @swagger
 * /user/register:
 *   post:
 *       summary: To register a user in the database
 *       tags: [Users]
 *       requestBody:
 *           required: true
 *           content:
 *               application/json:
 *                   schema:
 *                       $ref: '#/components/schemas/User'
 *       responses:
 *           200:
 *               description: User registered successfully
 *               content:
 *                   application/json:
 *                       schema:
 *                           $ref: '#/components/schemas/User'
 *           500:
 *               description: Some server error
 */
/**
 * @swagger
 * /user/login:
 *   post:
 *       summary: To login to application and accessing its features
 *       tags: [Users]
 *       requestBody:
 *           required: true
 *           content:
 *               application/json:
 *                   schema:
 *                       $ref: '#/components/schemas/User'
 *       responses:
 *           200:
 *               description: User logged in successfully
 *               content:
 *                   application/json:
 *                       schema:
 *                           $ref: '#/components/schemas/User'
 *           500:
 *               description: Some server error
 */
/**
 * @swagger
 * /user/apply:
 *   post:
 *       summary: A Trainee can apply to become a Trainer of this application
 *       tags: [Users]
 *       requestBody:
 *           required: true
 *           content:
 *               application/json:
 *                   schema:
 *                       $ref: '#/components/schemas/User'
 *       responses:
 *           200:
 *               description: Application Submitted Successfully
 *               content:
 *                   application/json:
 *                       schema:
 *                           $ref: '#/components/schemas/User'
 *           500:
 *               description: Some server error
 */
/**
 * @swagger
 * /user/pending:
 *   get:
 *       summary: All pending requests of users who have applied for becoming a Trainer
 *       tags: [Users]
 *       requestBody:
 *           required: false
 *           content:
 *               application/json:
 *                   schema:
 *                       $ref: '#/components/schemas/User'
 *       responses:
 *           200:
 *               description: Application Submitted Successfully
 *               content:
 *                   application/json:
 *                       schema:
 *                           $ref: '#/components/schemas/User'
 *           500:
 *               description: Some server error
 */
/**
 * @swagger
 * /user/apply:
 *   post:
 *       summary: A Trainee can apply to become a Trainer of this application
 *       tags: [Users]
 *       requestBody:
 *           required: true
 *           content:
 *               application/json:
 *                   schema:
 *                       $ref: '#/components/schemas/User'
 *       responses:
 *           200:
 *               description: Application Submitted Successfully
 *               content:
 *                   application/json:
 *                       schema:
 *                           $ref: '#/components/schemas/User'
 *           500:
 *               description: Some server error
 */
/**
 * @swagger
 * /user/applications/:email:
 *   put:
 *       summary: Admin can accept or reject users who have applied for Trainer
 *       tags: [Users]
 *       requestBody:
 *           required: true
 *           content:
 *               application/json:
 *                   schema:
 *                       $ref: '#/components/schemas/User'
 *       responses:
 *           200:
 *               description: Application Updated Successfully
 *               content:
 *                   application/json:
 *                       schema:
 *                           $ref: '#/components/schemas/User'
 *           500:
 *               description: Some server error
 */
/**
 * @swagger
 * /user/upload:
 *   post:
 *       summary: To upload images to the database
 *       tags: [Users]
 *       requestBody:
 *           required: true
 *           content:
 *               application/json:
 *                   schema:
 *                       $ref: '#/components/schemas/Images'
 *       responses:
 *           200:
 *               description: Images uploaded successfully
 *               content:
 *                   application/json:
 *                       schema:
 *                           $ref: '#/components/schemas/User'
 *           500:
 *               description: Some server error
 */
/**
 * @swagger
 * /user/submit_Trainer_details:
 *   patch:
 *       summary: To register a Trainer detail in the database
 *       tags: [Users]
 *       requestBody:
 *           required: true
 *           content:
 *               application/json:
 *                   schema:
 *                       $ref: '#/components/schemas/User'
 *       responses:
 *           200:
 *               description: Trainer data updated successfully
 *               content:
 *                   application/json:
 *                       schema:
 *                           $ref: '#/components/schemas/User'
 *           500:
 *               description: Some server error
 */

/**
 * @swagger
 * /user/logout:
 *   post:
 *       summary: A user can logout from the application
 *       tags: [Users]
 *       requestBody:
 *           required: false
 *           content:
 *               application/json:
 *                   schema:
 *                       $ref: '#/components/schemas/User'
 *       responses:
 *           200:
 *               description: logged out Successfully
 *               content:
 *                   application/json:
 *                       schema:
 *                           $ref: '#/components/schemas/User'
 *           500:
 *               description: Some server error
 */

//Trainer________________________________________________________________

/**
 * @swagger
 * /trainer/:
 *   get:
 *       summary: To get details of all the registered trainers in Database
 *       tags: [Trainers]
 *       requestBody:
 *           required: false
 *           content:
 *               application/json:
 *                   schema:
 *                       $ref: '#/components/schemas/User'
 *       responses:
 *           200:
 *               description: All trainers Data Successfully fetched
 *               content:
 *                   application/json:
 *                       schema:
 *                           $ref: '#/components/schemas/User'
 *           500:
 *               description: Some server error
 */

/**
 * @swagger
 * /trainer/update:
 *   patch:
 *       summary: To update a Trainer details in the database
 *       tags: [Trainers]
 *       requestBody:
 *           required: true
 *           content:
 *               application/json:
 *                   schema:
 *                       $ref: '#/components/schemas/User'
 *       responses:
 *           200:
 *               description: Trainer data updated successfully
 *               content:
 *                   application/json:
 *                       schema:
 *                           $ref: '#/components/schemas/User'
 *           500:
 *               description: Some server error
 */

/**
 * @swagger
 * /trainer/logout:
 *   post:
 *       summary: A trainer can logout from the application
 *       tags: [Trainers]
 *       requestBody:
 *           required: false
 *           content:
 *               application/json:
 *                   schema:
 *                       $ref: '#/components/schemas/User'
 *       responses:
 *           200:
 *               description: logged out Successfully
 *               content:
 *                   application/json:
 *                       schema:
 *                           $ref: '#/components/schemas/User'
 *           500:
 *               description: Some server error
 */

// booking________________________________________________________________

/**
 * @swagger
 * /book/:
 *   get:
 *       summary: All bookings done by the Trainee
 *       tags: [Bookings]
 *       requestBody:
 *           required: false
 *           content:
 *               application/json:
 *                   schema:
 *                       $ref: '#/components/schemas/Booking'
 *       responses:
 *           200:
 *               description: All bookings fetched Successfully
 *               content:
 *                   application/json:
 *                       schema:
 *                           $ref: '#/components/schemas/Booking'
 *           500:
 *               description: Some server error
 */
/**
 * @swagger
 * /book/book:
 *   post:
 *       summary: A Trainee can book a meeting with approved Trainers
 *       tags: [Bookings]
 *       requestBody:
 *           required: true
 *           content:
 *               application/json:
 *                   schema:
 *                       $ref: '#/components/schemas/Booking'
 *       responses:
 *           200:
 *               description: Request for meeting submited Successfully
 *               content:
 *                   application/json:
 *                       schema:
 *                           $ref: '#/components/schemas/Booking'
 *           500:
 *               description: Some server error
 */
/**
 * @swagger
 * /book/requests:
 *   get:
 *       summary: Get all bookings for logged in Trainer
 *       tags: [Bookings]
 *       requestBody:
 *           required: true
 *           content:
 *               application/json:
 *                   schema:
 *                       $ref: '#/components/schemas/Booking'
 *       responses:
 *           200:
 *               description: Requests for meeting fetched Successfully
 *               content:
 *                   application/json:
 *                       schema:
 *                           $ref: '#/components/schemas/Booking'
 *           500:
 *               description: Some server error
 */
/**
 * @swagger
 * /book/requests/:status:
 *   get:
 *       summary: Get the status of requests sent by the Trainees
 *       tags: [Bookings]
 *       requestBody:
 *           required: false
 *           content:
 *               application/json:
 *                   schema:
 *                       $ref: '#/components/schemas/Booking'
 *       responses:
 *           200:
 *               description: Requests for meeting fetched Successfully
 *               content:
 *                   application/json:
 *                       schema:
 *                           $ref: '#/components/schemas/Booking'
 *           500:
 *               description: Some server error
 */
/**
 * @swagger
 * /book/requests/:bookingid:
 *   post:
 *       summary: A Trainer can accept or reject the bookings
 *       tags: [Bookings]
 *       requestBody:
 *           required: true
 *           content:
 *               application/json:
 *                   schema:
 *                       $ref: '#/components/schemas/Booking'
 *       responses:
 *           200:
 *               description: Booking request updated successfully
 *               content:
 *                   application/json:
 *                       schema:
 *                           $ref: '#/components/schemas/Booking'
 *           500:
 *               description: Some server error
 */
