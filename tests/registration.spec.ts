import { test, expect } from '@playwright/test';

const randomNumber = Math.floor(Math.random() * (100000 - 1000 + 1)) + 1000;
const validEmail = `aqa-newExampleEmail${randomNumber}@gmail.com`;
const validPassword = 'PassWord123';

test.describe('Registration tests', () => {
    
    test.beforeEach(async ({ page }) => {
        await page.goto('/');
        await page.getByRole('button', { name: 'Sign up' }).click();
    });

    test.describe('All elements of "Registration" window should be visible', () => {
        
        test('Window "Registration" should have text "Registration"', async ({ page }) => {
            await expect(page.locator('.modal-title')).toHaveText('Registration');
        });
        
        test('Field "Name" should be visible', async ({ page }) => {
            await expect(page.locator('text=/^Name$/')).toBeVisible();
            await expect(page.locator('#signupName')).toBeVisible();
        });
        
        test('Field "Last name" should be visible', async ({ page }) => {
            await expect(page.locator('text=/^Last name$/')).toBeVisible();
            await expect(page.locator('#signupLastName')).toBeVisible();
        });
        
        test('Field "Email" should be visible', async ({ page }) => {
            await expect(page.locator('text=/^Email$/')).toBeVisible();
            await expect(page.locator('#signupEmail')).toBeVisible();
        });
        
        test('Field "Password" should be visible', async ({ page }) => {
            await expect(page.locator('text=/^Password$/')).toBeVisible();
            await expect(page.locator('#signupPassword')).toBeVisible();
        });
        
        test('Field "Re-enter password" should be visible', async ({ page }) => {
            await expect(page.locator('text=/^Re-enter password$/')).toBeVisible();
            await expect(page.locator('#signupRepeatPassword')).toBeVisible();
        });
        
        test('Button [Register] should be visible', async ({ page }) => {
            await expect(page.locator('.modal-footer button')).toHaveText('Register');
        });

    });

    test.describe('Field "Name"', () => {
       
        test('Unfocus empty field "Name" should show "Name is required" error', async ({ page }) => {
            await page.locator('#signupName').focus();
            await page.locator('#signupName').blur();
            await expect(page.locator('.invalid-feedback p')).toHaveText('Name is required');
        });
       
        test('Cyrillic letters in field "Name" should show "Name is invalid" error', async ({ page }) => {
            await page.locator('#signupName').fill('Кирилиця');
            await page.locator('#signupName').blur();
            await expect(page.locator('.invalid-feedback p')).toHaveText('Name is invalid');
        });

        test('Numbers in field "Name" should show "Name is invalid" error', async ({ page }) => {
            await page.locator('#signupName').fill('123');
            await page.locator('#signupName').blur();
            await expect(page.locator('.invalid-feedback p')).toHaveText('Name is invalid');
        });
       
        test('1 character in field "Name" should show "Name has to be from 2 to 20 characters long" error', async ({ page }) => {
            await page.locator('#signupName').fill('Y');
            await page.locator('#signupName').blur();
            await expect(page.locator('.invalid-feedback p')).toHaveText('Name has to be from 2 to 20 characters long');
        });

        test('2 characters in field "Name" should NOT show "Name has to be from 2 to 20 characters long" error', async ({ page }) => {
            await page.locator('#signupName').fill('YJ');
            await page.locator('#signupName').blur();
            await expect(page.locator('#signupName .invalid-feedback')).toHaveCount(0);
        });

        test('"Username" in field "Name" should NOT show "Name has to be from 2 to 20 characters long" error', async ({ page }) => {
            await page.locator('#signupName').fill('Username');
            await page.locator('#signupName').blur();
            await expect(page.locator('#signupName .invalid-feedback')).toHaveCount(0);
        });
       
        test('20 characters "Name" should NOT show "Name has to be from 2 to 20 characters long" error', async ({ page }) => {
            await page.locator('#signupName').fill('TwentyCharactersLong');
            await page.locator('#signupName').blur();
            await expect(page.locator('#signupName .invalid-feedback')).toHaveCount(0);
        });

        test('21 characters "Name" should show "Name has to be from 2 to 20 characters long" error', async ({ page }) => {
            await page.locator('#signupName').fill('TwentyOneCharssssLong');
            await page.locator('#signupName').blur();
            await expect(page.locator('.invalid-feedback p')).toHaveText('Name has to be from 2 to 20 characters long');
        });

        test('Any error in field "Name" should be with red (rgb(220, 53, 69)) border', async ({ page }) => {
            await page.locator('#signupName').focus();
            await page.locator('#signupName').blur();
            await expect(page.locator('#signupName')).toHaveCSS('border-color', 'rgb(220, 53, 69)');
        });

    });

    test.describe('Field "Last name"', () => {
       
        test('Unfocus empty field "Last name" should show "Last name is required" error', async ({ page }) => {
            await page.locator('#signupLastName').focus();
            await page.locator('#signupLastName').blur();
            await expect(page.locator('.invalid-feedback p')).toHaveText('Last name is required');
        });
       
        test('Cyrillic letters in field "Last name" should show "Last name is invalid" error', async ({ page }) => {
            await page.locator('#signupLastName').fill('Кирилиця');
            await page.locator('#signupLastName').blur();
            await expect(page.locator('.invalid-feedback p')).toHaveText('Last name is invalid');
        });

        test('Numbers in field "Last name" should show "Last name is invalid" error', async ({ page }) => {
            await page.locator('#signupLastName').fill('123');
            await page.locator('#signupLastName').blur();
            await expect(page.locator('.invalid-feedback p')).toHaveText('Last name is invalid');
        });
       
        test('1 character in field "Last name" should show "Last name has to be from 2 to 20 characters long" error', async ({ page }) => {
            await page.locator('#signupLastName').fill('Y');
            await page.locator('#signupLastName').blur();
            await expect(page.locator('.invalid-feedback p')).toHaveText('Last name has to be from 2 to 20 characters long');
        });

        test('2 characters in field "Last name" should NOT show "Last name has to be from 2 to 20 characters long" error', async ({ page }) => {
            await page.locator('#signupLastName').fill('YJ');
            await page.locator('#signupLastName').blur();
            await expect(page.locator('.invalid-feedback p')).toHaveCount(0);
        });

        test('"Lastname" in field "Last name" should NOT show "Last name has to be from 2 to 20 characters long" error', async ({ page }) => {
            await page.locator('#signupLastName').fill('Lastname');
            await page.locator('#signupLastName').blur();
            await expect(page.locator('.invalid-feedback p')).toHaveCount(0);
        });
       
        test('20 characters "Last name" should NOT show "Last name has to be from 2 to 20 characters long" error', async ({ page }) => {
            await page.locator('#signupLastName').fill('TwentyCharactersLong');
            await page.locator('#signupLastName').blur();
            await expect(page.locator('.invalid-feedback p')).toHaveCount(0);
        });

        test('21 characters "Last name" should show "Last name has to be from 2 to 20 characters long" error', async ({ page }) => {
            await page.locator('#signupLastName').fill('TwentyOneCharssssLong');
            await page.locator('#signupLastName').blur();
            await expect(page.locator('.invalid-feedback p')).toHaveText('Last name has to be from 2 to 20 characters long');
        });

        test('Any error in field "Last name" should be with red (rgb(220, 53, 69)) border', async ({ page }) => {
            await page.locator('#signupLastName').focus();
            await page.locator('#signupLastName').blur();
            await expect(page.locator('#signupLastName')).toHaveCSS('border-color', 'rgb(220, 53, 69)');
        });

    });

    test.describe('Field "Email"', () => {
       
        test('Unfocus empty field "Email" should show "Email is required" error', async ({ page }) => {
            await page.locator('#signupEmail').focus();
            await page.locator('#signupEmail').blur();
            await expect(page.locator('.invalid-feedback p')).toHaveText('Email required');
        });

        test('Any error in field "Email" should be with red (rgb(220, 53, 69)) border', async ({ page }) => {
            await page.locator('#signupEmail').focus();
            await page.locator('#signupEmail').blur();
            await expect(page.locator('#signupEmail')).toHaveCSS('border-color', 'rgb(220, 53, 69)');
        });

        test.describe('Field "Email" with VALID inputs', () => {
            
            test('"user@example.com" should NOT show "Email is incorrect" error', async ({ page }) => {
                await page.locator('#signupEmail').fill('user@example.com');
                await expect(page.locator('.invalid-feedback p')).toHaveCount(0);
            });
            
            test('"john.doe123@company.org" should NOT show "Email is incorrect" error', async ({ page }) => {
                await page.locator('#signupEmail').fill('john.doe123@company.org');
                await expect(page.locator('.invalid-feedback p')).toHaveCount(0);
            });

            test('"jane_doe@example.co.uk" should NOT show "Email is incorrect" error', async ({ page }) => {
                await page.locator('#signupEmail').fill('jane_doe@example.co.uk');
                await expect(page.locator('.invalid-feedback p')).toHaveCount(0);
            });

            test('"first.last@subdomain.example.com" should NOT show "Email is incorrect" error', async ({ page }) => {
                await page.locator('#signupEmail').fill('first.last@subdomain.example.com');
                await expect(page.locator('.invalid-feedback p')).toHaveCount(0);
            });

            test('"user1234@domain.io" should NOT show "Email is incorrect" error', async ({ page }) => {
                await page.locator('#signupEmail').fill('user1234@domain.io');
                await expect(page.locator('.invalid-feedback p')).toHaveCount(0);
            });

            test('"user@domain.edu" should NOT show "Email is incorrect" error', async ({ page }) => {
                await page.locator('#signupEmail').fill('user@domain.edu');
                await expect(page.locator('.invalid-feedback p')).toHaveCount(0);
            });

            test('"name.surname@domain.travel" should NOT show "Email is incorrect" error', async ({ page }) => {
                await page.locator('#signupEmail').fill('name.surname@domain.travel');
                await expect(page.locator('.invalid-feedback p')).toHaveCount(0);
            });

            test('"contact@subdomain.domain.com" should NOT show "Email is incorrect" error', async ({ page }) => {
                await page.locator('#signupEmail').fill('contact@subdomain.domain.com');
                await expect(page.locator('.invalid-feedback p')).toHaveCount(0);
            });

            test('"test.email+filter@example.com" should NOT show "Email is incorrect" error', async ({ page }) => {
                await page.locator('#signupEmail').fill('test.email+filter@example.com');
                await expect(page.locator('.invalid-feedback p')).toHaveCount(0);
            });

            test('"user.name@domain1234.com" should NOT show "Email is incorrect" error', async ({ page }) => {
                await page.locator('#signupEmail').fill('user.name@domain1234.com');
                await expect(page.locator('.invalid-feedback p')).toHaveCount(0);
            });

            test('"valid_email@domain.pro" should NOT show "Email is incorrect" error', async ({ page }) => {
                await page.locator('#signupEmail').fill('valid_email@domain.pro');
                await expect(page.locator('.invalid-feedback p')).toHaveCount(0);
            });

            test('"info@domain.xyz" should NOT show "Email is incorrect" error', async ({ page }) => {
                await page.locator('#signupEmail').fill('info@domain.xyz');
                await expect(page.locator('.invalid-feedback p')).toHaveCount(0);
            });
            
            test('"user123@[192.168.1.1]" should NOT show "Email is incorrect" error', async ({ page }) => {
                await page.locator('#signupEmail').fill('user123@[192.168.1.1]');
                await expect(page.locator('.invalid-feedback p')).toHaveCount(0);
            });
            
            test('"_______@domain.com" should NOT show "Email is incorrect" error', async ({ page }) => {
                await page.locator('#signupEmail').fill('_______@domain.com');
                await expect(page.locator('.invalid-feedback p')).toHaveCount(0);
            });
            
            test('"user123@email.co.uk" should NOT show "Email is incorrect" error', async ({ page }) => {
                await page.locator('#signupEmail').fill('user123@email.co.uk');
                await expect(page.locator('.invalid-feedback p')).toHaveCount(0);
            });
            
            test('"user_name1234@email-provider.net" should NOT show "Email is incorrect" error', async ({ page }) => {
                await page.locator('#signupEmail').fill('user_name1234@email-provider.net');
                await expect(page.locator('.invalid-feedback p')).toHaveCount(0);
            });
            
            test('"info@sub.domain.com" should NOT show "Email is incorrect" error', async ({ page }) => {
                await page.locator('#signupEmail').fill('info@sub.domain.com');
                await expect(page.locator('.invalid-feedback p')).toHaveCount(0);
            });
            

        });

        test.describe('Field "Email" with INVALID inputs', () => {
            
            test('"user@domain" should show "Email is incorrect" error - missing domain extension like .com or .org', async ({ page }) => {
                await page.locator('#signupEmail').fill('user@domain');
                await page.locator('#signupEmail').blur();
                await expect(page.locator('.invalid-feedback p')).toHaveText('Email is incorrect');
            });
            
            test('"user@.com" should show "Email is incorrect" error - domain part starts with a dot', async ({ page }) => {
                await page.locator('#signupEmail').fill('user@.com');
                await page.locator('#signupEmail').blur();
                await expect(page.locator('.invalid-feedback p')).toHaveText('Email is incorrect');
            });
            
            test('"@domain.com" should show "Email is incorrect" error - missing local part before the @', async ({ page }) => {
                await page.locator('#signupEmail').fill('@domain.com');
                await page.locator('#signupEmail').blur();
                await expect(page.locator('.invalid-feedback p')).toHaveText('Email is incorrect');
            });
            
            test('"user@domain@domain.com" should show "Email is incorrect" error - two @ symbols', async ({ page }) => {
                await page.locator('#signupEmail').fill('user@domain@domain.com');
                await page.locator('#signupEmail').blur();
                await expect(page.locator('.invalid-feedback p')).toHaveText('Email is incorrect');
            });
            
            test('"user@com" should show "Email is incorrect" error - missing dot before domain', async ({ page }) => {
                await page.locator('#signupEmail').fill('user@com');
                await page.locator('#signupEmail').blur();
                await expect(page.locator('.invalid-feedback p')).toHaveText('Email is incorrect');
            });
            
            test('"user@domain,com" should show "Email is incorrect" error - comma instead of dot', async ({ page }) => {
                await page.locator('#signupEmail').fill('user@domain,com');
                await page.locator('#signupEmail').blur();
                await expect(page.locator('.invalid-feedback p')).toHaveText('Email is incorrect');
            });
            
            test('"user@domain..com" should show "Email is incorrect" error - consecutive dots in domain', async ({ page }) => {
                await page.locator('#signupEmail').fill('user@domain..com');
                await page.locator('#signupEmail').blur();
                await expect(page.locator('.invalid-feedback p')).toHaveText('Email is incorrect');
            });
            
            test('"user@domain#com" should show "Email is incorrect" error - hash symbol is not allowed', async ({ page }) => {
                await page.locator('#signupEmail').fill('user@domain#com');
                await page.locator('#signupEmail').blur();
                await expect(page.locator('.invalid-feedback p')).toHaveText('Email is incorrect');
            });
            
            test('"user@domain!com" should show "Email is incorrect" error - exclamation mark is not allowed', async ({ page }) => {
                await page.locator('#signupEmail').fill('user@domain!com');
                await page.locator('#signupEmail').blur();
                await expect(page.locator('.invalid-feedback p')).toHaveText('Email is incorrect');
            });
            
            test('"user@subdomain@domain.com" should show "Email is incorrect" error - extra @ in subdomain', async ({ page }) => {
                await page.locator('#signupEmail').fill('user@subdomain@domain.com');
                await page.locator('#signupEmail').blur();
                await expect(page.locator('.invalid-feedback p')).toHaveText('Email is incorrect');
            });
            
            test('"userdomain.com" should show "Email is incorrect" error - missing @', async ({ page }) => {
                await page.locator('#signupEmail').fill('userdomain.com');
                await page.locator('#signupEmail').blur();
                await expect(page.locator('.invalid-feedback p')).toHaveText('Email is incorrect');
            });
            
            test('"user name@domain.com" should show "Email is incorrect" error - whitespace', async ({ page }) => {
                await page.locator('#signupEmail').fill('user name@domain.com');
                await page.locator('#signupEmail').blur();
                await expect(page.locator('.invalid-feedback p')).toHaveText('Email is incorrect');
            });
            
            test('"user@domain.c" should show "Email is incorrect" error - TLD (Top-Level Domain) too short, must be at least 2 characters', async ({ page }) => {
                await page.locator('#signupEmail').fill('user@domain.c');
                await page.locator('#signupEmail').blur();
                await expect(page.locator('.invalid-feedback p')).toHaveText('Email is incorrect');
            });
            
            test('"user@invalid-tld.123" should show "Email is incorrect" error - the top-level domain (.123) is not a valid TLD according to established standards', async ({ page }) => {
                await page.locator('#signupEmail').fill('user@invalid-tld.123');
                await page.locator('#signupEmail').blur();
                await expect(page.locator('.invalid-feedback p')).toHaveText('Email is incorrect');
            });
            
            test('"user&name@email-provider.net" should show "Email is incorrect" error - contains an invalid character (&) in the local part', async ({ page }) => {
                await page.locator('#signupEmail').fill('user&name@email-provider.net');
                await page.locator('#signupEmail').blur();
                await expect(page.locator('.invalid-feedback p')).toHaveText('Email is incorrect');
            });

        });

    });

    test.describe('Field "Password"', () => {
       
        test('Unfocus empty field "Password" should show "Password required" error', async ({ page }) => {
            await page.locator('#signupPassword').focus();
            await page.locator('#signupPassword').blur();
            await expect(page.locator('.invalid-feedback p')).toHaveText('Password required');
        });

        test('Any error in field "Password" should be with red (rgb(220, 53, 69)) border', async ({ page }) => {
            await page.locator('#signupPassword').focus();
            await page.locator('#signupPassword').blur();
            await expect(page.locator('#signupPassword')).toHaveCSS('border-color', 'rgb(220, 53, 69)');
        });
       
        test('7 VALID characters in field "Password" should show "Password has to be from 8 to 15 characters long and contain at least one integer, one capital, and one small letter" error', async ({ page }) => {
            await page.locator('#signupPassword').fill('12345aA');
            await page.locator('#signupPassword').blur();
            await expect(page.locator('.invalid-feedback p')).toHaveText('Password has to be from 8 to 15 characters long and contain at least one integer, one capital, and one small letter');
        });
       
        test('8 VALID characters in field "Password" should NOT show "Password has to be from 8 to 15 characters long and contain at least one integer, one capital, and one small letter" error', async ({ page }) => {
            await page.locator('#signupPassword').fill('123456aA');
            await page.locator('#signupPassword').blur();
            await expect(page.locator('.invalid-feedback p')).toHaveCount(0);
        });

        test('15 VALID characters in field "Password" should NOT show "Password has to be from 8 to 15 characters long and contain at least one integer, one capital, and one small letter" error', async ({ page }) => {
            await page.locator('#signupPassword').fill('aA1234567890123');
            await page.locator('#signupPassword').blur();
            await expect(page.locator('.invalid-feedback p')).toHaveCount(0);
        });

        test('16 VALID characters in field "Password" should show "Password has to be from 8 to 15 characters long and contain at least one integer, one capital, and one small letter" error', async ({ page }) => {
            await page.locator('#signupPassword').fill('aA12345678901234');
            await page.locator('#signupPassword').blur();
            await expect(page.locator('.invalid-feedback p')).toHaveText('Password has to be from 8 to 15 characters long and contain at least one integer, one capital, and one small letter');
        });
       
        test.describe('Field "Password" with VALID inputs', () => {

            test('"CodeMaster2025" in field "Password" should NOT show "Password has to be from 8 to 15 characters long and contain at least one integer, one capital, and one small letter" error', async ({ page }) => {
                await page.locator('#signupPassword').fill('CodeMaster2025');
                await page.locator('#signupPassword').blur();
                await expect(page.locator('.invalid-feedback p')).toHaveCount(0);
            });

            test('"MyP@ssword7" in field "Password" should NOT show "Password has to be from 8 to 15 characters long and contain at least one integer, one capital, and one small letter" error', async ({ page }) => {
                await page.locator('#signupPassword').fill('MyP@ssword7');
                await page.locator('#signupPassword').blur();
                await expect(page.locator('.invalid-feedback p')).toHaveCount(0);
            });

            test('"vAlid1234" in field "Password" should NOT show "Password has to be from 8 to 15 characters long and contain at least one integer, one capital, and one small letter" error', async ({ page }) => {
                await page.locator('#signupPassword').fill('vAlid1234');
                await page.locator('#signupPassword').blur();
                await expect(page.locator('.invalid-feedback p')).toHaveCount(0);
            });

        });
       
        test.describe('Field "Password" with INVALID inputs', () => {

            test('"password" in field "Password" should show error - no capital letter or number', async ({ page }) => {
                await page.locator('#signupPassword').fill('password');
                await page.locator('#signupPassword').blur();
                await expect(page.locator('.invalid-feedback p')).toHaveText('Password has to be from 8 to 15 characters long and contain at least one integer, one capital, and one small letter');
            });

            test('"PASSWORD123" in field "Password" should show error - no lowercase letter', async ({ page }) => {
                await page.locator('#signupPassword').fill('PASSWORD123');
                await page.locator('#signupPassword').blur();
                await expect(page.locator('.invalid-feedback p')).toHaveText('Password has to be from 8 to 15 characters long and contain at least one integer, one capital, and one small letter');
            });

            test('"12345678" in field "Password" should show error - no capital or lowercase letter', async ({ page }) => {
                await page.locator('#signupPassword').fill('12345678');
                await page.locator('#signupPassword').blur();
                await expect(page.locator('.invalid-feedback p')).toHaveText('Password has to be from 8 to 15 characters long and contain at least one integer, one capital, and one small letter');
            });

            test('"abcDEFGH" in field "Password" should show error - no number', async ({ page }) => {
                await page.locator('#signupPassword').fill('abcDEFGH');
                await page.locator('#signupPassword').blur();
                await expect(page.locator('.invalid-feedback p')).toHaveText('Password has to be from 8 to 15 characters long and contain at least one integer, one capital, and one small letter');
            });

            test('"1234abcd" in field "Password" should show error - no capital letter', async ({ page }) => {
                await page.locator('#signupPassword').fill('1234abcd');
                await page.locator('#signupPassword').blur();
                await expect(page.locator('.invalid-feedback p')).toHaveText('Password has to be from 8 to 15 characters long and contain at least one integer, one capital, and one small letter');
            });

            test('"A1b@" in field "Password" should show error - too short, less than 8 characters', async ({ page }) => {
                await page.locator('#signupPassword').fill('A1b@');
                await page.locator('#signupPassword').blur();
                await expect(page.locator('.invalid-feedback p')).toHaveText('Password has to be from 8 to 15 characters long and contain at least one integer, one capital, and one small letter');
            });

            test('"A1@defghijklmnopqrst" in field "Password" should show error - too long, more than 15 characters', async ({ page }) => {
                await page.locator('#signupPassword').fill('A1@defghijklmnopqrst');
                await page.locator('#signupPassword').blur();
                await expect(page.locator('.invalid-feedback p')).toHaveText('Password has to be from 8 to 15 characters long and contain at least one integer, one capital, and one small letter');
            });

        });

    });

    test.describe('Field "Re-enter password"', () => {
       
        test('Unfocus empty field "Re-enter password" should show "Re-enter password required" error', async ({ page }) => {
            await page.locator('#signupRepeatPassword').focus();
            await page.locator('#signupRepeatPassword').blur();
            await expect(page.locator('.invalid-feedback p')).toHaveText('Re-enter password required');
        });

        test('Any error in field "Re-enter password" should be with red (rgb(220, 53, 69)) border', async ({ page }) => {
            await page.locator('#signupRepeatPassword').focus();
            await page.locator('#signupRepeatPassword').blur();
            await expect(page.locator('#signupRepeatPassword')).toHaveCSS('border-color', 'rgb(220, 53, 69)');
        });

        test('Same valid inputs in "Password" and "Re-enter password" should NOT show "Passwords do not match" error', async ({ page }) => {
            await page.locator('#signupPassword').fill('123456aA');
            await page.locator('#signupRepeatPassword').fill('123456aA');
            await expect(page.locator('.invalid-feedback p')).toHaveCount(0);
        });

        test('Different valid inputs in "Password" and "Re-enter password" should show "Passwords do not match" error', async ({ page }) => {
            await page.locator('#signupPassword').fill('123456aA');
            await page.locator('#signupRepeatPassword').fill('123456aAbB');
            await page.locator('#signupRepeatPassword').blur();
            await expect(page.locator('.invalid-feedback p')).toHaveText('Passwords do not match');
        });

    });

    test.describe('Button [Register]', () => {
       
        test('Button [Register] should be disabled by default', async ({ page }) => {
            await expect(page.getByRole('button', { name: 'Register' })).toBeDisabled;
        });
       
        test('Button [Register] should be disabled with INVALID data in any field', async ({ page }) => {
            await page.locator('#signupName').fill('Username');
            await page.locator('#signupLastName').fill('Lastname');
            await page.locator('#signupEmail').fill(validEmail);
            await page.locator('#signupPassword').fill(validPassword);
            await page.locator('#signupRepeatPassword').fill(validPassword + '123');
            await expect(page.getByRole('button', { name: 'Register' })).toBeDisabled;
        });

        test('Button [Register] should be enabled with VALID data in all fields', async ({ page }) => {
            await page.locator('#signupName').fill('Username');
            await page.locator('#signupLastName').fill('Lastname');
            await page.locator('#signupEmail').fill(validEmail);
            await page.locator('#signupPassword').fill(validPassword);
            await page.locator('#signupRepeatPassword').fill(validPassword);
            await expect(page.getByRole('button', { name: 'Register' })).toBeEnabled;
        });

        test.describe('User should be created with valid data', () => {
            
            test('Click on button [Register] with VALID data in all fields should create new user', async ({ page }) => {
                await page.locator('#signupName').fill('Username');
                await page.locator('#signupLastName').fill('Lastname');
                await page.locator('#signupEmail').fill(validEmail);
                await page.locator('#signupPassword').fill(validPassword);
                await page.locator('#signupRepeatPassword').fill(validPassword);
                await page.getByRole('button', { name: 'Register' }).click();
                await expect(page.locator('.alert-list')).toHaveText('Registration complete');
                await expect(page.locator('#userNavDropdown')).toHaveText(' My profile ');
                await expect(page).toHaveURL('/panel/garage');
            });

        });

    });

});

test.describe('Login tests', () => {
    
    test('Login should be success with valid data', async ({ page }) => {
        await page.getByRole('button', { name: 'Sign In' }).click();
        await page.locator('#signinEmail').fill(validEmail);
        await page.locator('#signinPassword').fill(validPassword);
        await page.getByRole('button', { name: 'Login' }).click();
        await expect(page.locator('.alert-list')).toHaveText('You have been successfully logged in');
        await expect(page.locator('#userNavDropdown')).toHaveText(' My profile ');
        await expect(page).toHaveURL('/panel/garage');
    });

});
