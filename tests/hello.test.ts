// @ts-expect-error 
import { describe, expect, test } from 'vitest';
import { hello } from '../src/src/hello';

describe('hello', () => {
  test('retourne un message', () => {
    expect(hello()).toBe("Bonjour Test 1");
  });
});