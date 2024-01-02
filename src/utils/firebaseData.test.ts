import {expect, test} from 'vitest'
import { firebaseData } from './firebaseData'

test('test type of fetching single firebase document', () => {
    const {getOneCard} = firebaseData()
    expect(getOneCard('test@gmail.com')).toBeTypeOf('object')
})