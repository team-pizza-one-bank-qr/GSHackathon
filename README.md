# GSHackathon - OneBankQR

- [Pitch Deck](/Pizza%20pitch.pdf)
- [Pitch Video](/Pitch_video.MP4)

## Setting up

1. Head to [Business Frontend](https://main.dggldc4s1btfu.amplifyapp.com/)
2. Click on get started & scan QR with mobile device (You'll be redirected to the [client frontend](https://main.d17oe85yzyf5i1.amplifyapp.com/))
4. Approve or decline financial onboarding request
5. Head to [business dashboard](https://main.dggldc4s1btfu.amplifyapp.com/dashboard) and you can now see the clients' data!

## Problem Identified

Clients face during the financial on-boarding process is the manual entry of financial information into business platforms. Manual effort and time is required by clients to do this step. On the other hand, businesses have to also manually authenticate clients’ data, resulting in increased time spent on processes that can be automated.

The second problem we identified is the lack of consolidation of financial data on the clients’ end. It becomes difficult to track each financial entity. Clients have to also update each entity whenever there is a change in banking details.

Furthermore, there are security concerns as sensitive banking information is stored differently for each business.

## Target Market

For our target market, we have identified 3 segments that we want to focus on. The primary audience that the solution is designed for will be businesses that require any access to their client’s financial information. Next, our secondary audience will be the clients. Clients are any businesses or consumers that want to onboard with a business and share financial information. Finally, the last group involves the banks. Banks have to support the access of clients’ financial information.

## Why this market?

So why did we choose to target these markets and propose this solution? This is due to the large serviceable market where the target audience concerns almost every industry. 

Next, can increase access to financial services for businesses. There is greater connectivity to other clients or businesses. Lastly, this helps to promote financial inclusivity where it creates greater opportunities for business, clients and banks to work together.



## Lambda Functions

Serverless lambda functions are used as the bulk of the architecture for OneBankQR as it is an event-driven compute service that runs code for virtually any type of application or backend service without provisioning or managing servers.

The code for the lambda functions can be found [here](integration-layer/lambda-functions/).
