import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('http://localhost:5173/');
  await page.getByRole('link', { name: 'Login' }).click();
  await page.getByPlaceholder('Email address').fill('fake@email.com');
  await page.getByPlaceholder('Password').click();
  await page.getByPlaceholder('Password').fill('notapassword');
  await page.getByRole('button', { name: 'Login' }).click();
  await expect(page.getByText('{"code":404,"message":"')).toBeVisible();
});

test('register', async ({ page }) => {
  await page.goto('http://localhost:5173/');
  await page.getByRole('link', { name: 'Register' }).click();
  await page.getByPlaceholder('Full name').fill('NewUser');
  await page.getByPlaceholder('Email address').click();
  await page.getByPlaceholder('Email address').fill('Email@jwt.com');
  await page.getByPlaceholder('Password').click();
  await page.getByPlaceholder('Password').fill('newpassword');
  await page.getByRole('button', { name: 'Register' }).click();
  await page.getByRole('link', { name: 'N', exact: true }).click();
  await page.getByLabel('Global').getByRole('link', { name: 'Franchise' }).click();
});

test('logout', async ({ page }) => {

  await page.route('*/**/api/auth', async (route) => {
    const authType = route.request().method();
    if (authType == 'PUT')
    {
      const loginReq = { email: 'd@jwt.com', password: 'a' };
      const loginRes = { user: { id: 3, name: 'Kai Chen', email: 'd@jwt.com', roles: [{ role: 'diner' }] }, token: 'abcdef' };
      expect(route.request().postDataJSON()).toMatchObject(loginReq);
      await route.fulfill({ json: loginRes });
    }
    else if (authType == 'DELETE')
    {
      const delRes = {message: "logout successful"};
      await route.fulfill({json: delRes});
    }

  });

  await page.goto('http://localhost:5173/fake');
  await page.getByRole('link', { name: 'Login' }).click();

  await page.getByPlaceholder('Email address').click();
  await page.getByPlaceholder('Email address').fill('d@jwt.com');
  await page.getByPlaceholder('Password').click();
  await page.getByPlaceholder('Password').fill('a');
  await page.getByRole('button', { name: 'Login' }).click();
  await page.getByRole('link', { name: 'Logout' }).click();
  await page.getByRole('link', { name: 'Login' }).click();
});
