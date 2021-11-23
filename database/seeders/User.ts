import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import User from 'App/Models/User'

export default class UserSeeder extends BaseSeeder {
  public async run () {
    await User.createMany([
      {
        email: 'vir@adonisjs.com',
        password: 'admin',
      },
      {
        email: 'roma@adonisjs.com',
        password: 'admin'
      }
    ])
  }
}
