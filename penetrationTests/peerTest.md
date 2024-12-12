Conducted a Penetration Test on https://pizza.ldach.click/ and https://pizza.byucsstudent.click


# SELF PENETRATION TEST

| Item           | Result                                                                         |
| -------------- | ------------------------------------------------------------------------------ |
| Date           | December 11th, 2024                                                                 |
| Target         | pizza.byucsstudent.click                                                       |
| Classification | Security Misconfiguration                                                                   |
| Severity       |  3                                                                            |
| Description    | Default admin account was available                |
| Images         |![OWASP 5 Default Account Credentials](https://github.com/user-attachments/assets/09ef6297-cafb-43d7-aaf9-869bc806b5b2)
| Corrections    | Create a new non-default admin account                                                        |



# PEER ATTACK

| Item           | Result                                                                         |
| -------------- | ------------------------------------------------------------------------------ |
| Date           | December 11th, 2024                                                                 
| Target         | pizza.byucsstudent.click                                                       |
| Classification | Identification and Authentication Failures                                                                     |
| Severity       | 4                                                                             |
| Description    | Passwords can be extremelt weak and vulnerable to brute force attacks                |
| Images         | ![OWASP 7 Weak Passwords](https://github.com/user-attachments/assets/1af1b06a-c0c2-4a4c-a050-67d70b4d0ca7) |
| Corrections    | Enforce strong password requirements                                                          |


| Item           | Result                                                                         |
| -------------- | ------------------------------------------------------------------------------ |
| Date           | December 11th, 2024                                                                |
| Target         | pizza.byucsstudent.click                                                       |
| Classification | 	Cryptographic Failures                                                                      |
| Severity       | 2                                                                              |
| Description    | Passwords are sent in plaintext
| Images         |![OWASP 2 Password transmitted in plaintext](https://github.com/user-attachments/assets/393d5687-91ed-49c1-94f4-3b89b236d994)
| Corrections    | Store and Transmit hashed passwords                                                         |



# Summary of Learnings

While I struggled to effectively find ways to penetrate these site, This deliverable and the study I have done for it has taught me a lot about how important security is for sites that you host, since a minor flaw in your code or mishandling of data could create a situation in which a bad actor gains administrator permissions over your site & accounts


