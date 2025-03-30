'use client';
import * as React from 'react';
import StatusBar from '../../components/StatusBar.tsx';
import MenuHeader from '../../components/RealHeader.tsx';
import NavigationBar from '../../components/NavigationBar.tsx';

const MyStudies: React.FC = () => {
  return (
    <main className="mx-auto w-full max-w-[480px]">
      <div className="overflow-hidden w-full bg-white">
        <StatusBar />
        <center>
          <MenuHeader pageName="My Studies" />
        </center>
        <div className="flex flex-col items-center px-6 mt-8 w-full">
          {/* Continue Reading Section with increased spacing */}
          <div className="w-full mb-10">
            {/* Section header */}

            <div
              style={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                marginBottom: '20px',
              }}
              className="flex-row items-center"
            >
              <img
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/1e9de21cab42124d592f705f8ddcf19ad0566684?placeholderIfAbsent=true&apiKey=67d06c088f3849ce8c0f6314319fc847"
                className="w-6 h-6 mr-3"
                alt="Continue Reading Icon"
                style={{ marginRight: '12px' }}
              />
              <h2 className="text-xl font-medium text-black">
                Continue Reading
              </h2>
            </div>

            {/* Articles with increased spacing */}
            <div
              className="flex flex-row w-full"
              style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
                gap: '16px',
              }}
            >
              <article className="flex flex-col items-center">
                <h3 className="text-sm leading-none text-center text-black mb-2">
                  Yesterday
                </h3>
                <div className="rounded-md w-[46px] aspect-[1.034]">
                  <img
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/91690857356e7ea76759a3cf7a25a2446a6d7bcf?placeholderIfAbsent=true&apiKey=67d06c088f3849ce8c0f6314319fc847"
                    className="object-cover w-full h-full rounded-md"
                    alt="Yesterday's reading"
                  />
                </div>
              </article>

              <article className="flex flex-col items-center">
                <h3 className="text-base leading-none text-center text-black mb-4">
                  Last week
                </h3>
                <div className="rounded-md border border-black border-solid w-[92px] aspect-[1.034]">
                  <img
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/91690857356e7ea76759a3cf7a25a2446a6d7bcf?placeholderIfAbsent=true&apiKey=67d06c088f3849ce8c0f6314319fc847"
                    className="object-cover w-full h-full rounded-md"
                    alt="Last week's reading"
                  />
                </div>
              </article>

              <article className="flex flex-col items-center">
                <h3 className="text-base leading-none text-center text-black mb-4">
                  Last Month
                </h3>
                <div className="rounded-md border border-black border-solid w-[92px] aspect-[1.034]">
                  <img
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/eeedf99226203aea3a8d7291f8e41c4d085549e7?placeholderIfAbsent=true&apiKey=67d06c088f3849ce8c0f6314319fc847"
                    className="object-cover w-full h-full rounded-md"
                    alt="Last month's reading"
                  />
                </div>
              </article>
            </div>
          </div>

          {/* What's Next Section with increased spacing */}
          <div className="w-full mb-10">
            {/* Section header */}
            <div
              style={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                marginBottom: '20px',
              }}
              className="flex-row items-center"
            >
              <img
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/af38d9278bbf8c92c1b70da1ecff08971de58922?placeholderIfAbsent=true&apiKey=67d06c088f3849ce8c0f6314319fc847"
                className="w-6 h-6 mr-3"
                alt="What's Next Icon"
                style={{ marginRight: '12px' }}
              />
              <h2 className="text-xl font-medium text-black">What's Next</h2>
            </div>

            {/* Images with increased spacing */}
            <div
              className="flex flex-row"
              style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
                gap: '20px',
              }}
            >
              <img
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/17de4cf0292e92894d8c97bfcc0e526296d5971a?placeholderIfAbsent=true&apiKey=67d06c088f3849ce8c0f6314319fc847"
                className="object-contain rounded-md aspect-[1.78] w-[158px]"
                alt="Next content preview 1"
              />
              <img
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/471e254c6f131cd90ceffec4cc03a7febc0763e0?placeholderIfAbsent=true&apiKey=67d06c088f3849ce8c0f6314319fc847"
                className="object-contain rounded-md aspect-[1.78] w-[158px]"
                alt="Next content preview 2"
              />
            </div>
          </div>

          {/* Additional Resources Section with increased spacing */}
          <div className="w-full mb-10">
            {/* Section header */}
            <div
              style={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                marginBottom: '20px',
              }}
              className="flex-row items-center"
            >
              <img
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/075c918e0d0293629d365c26f193fb3e36f4fc71?placeholderIfAbsent=true&apiKey=67d06c088f3849ce8c0f6314319fc847"
                className="w-6 h-6 mr-3"
                alt="Additional Resources Icon"
                style={{ marginRight: '12px' }}
              />
              <h2 className="text-xl font-medium text-black">
                Additional Resources
              </h2>
            </div>

            {/* Resource images with increased spacing */}
            <div
              className="flex flex-row"
              style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
                gap: '12px',
              }}
            >
              <img
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/1ed880868580015e8f2ccefd735a41d71bc249b4?placeholderIfAbsent=true&apiKey=67d06c088f3849ce8c0f6314319fc847"
                className="object-contain rounded-md aspect-[0.78] w-[69px]"
                alt="Resource 1"
              />
              <img
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/c8ef46788d1def70b7c8dde377f8446d17e2cfe2?placeholderIfAbsent=true&apiKey=67d06c088f3849ce8c0f6314319fc847"
                className="object-contain rounded-md aspect-[0.78] w-[69px]"
                alt="Resource 2"
              />
              <img
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/77942f00f2dc9d3cc9059b8fc64d074e7a264390?placeholderIfAbsent=true&apiKey=67d06c088f3849ce8c0f6314319fc847"
                className="object-contain rounded-md aspect-[0.78] w-[69px]"
                alt="Resource 3"
              />
              <img
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/5fab6496d3b34dbdba79bc4f619f230b20822f7f?placeholderIfAbsent=true&apiKey=67d06c088f3849ce8c0f6314319fc847"
                className="object-contain rounded-md aspect-[0.78] w-[69px]"
                alt="Resource 4"
              />
            </div>
          </div>
        </div>
        <center>
          <NavigationBar />
        </center>
      </div>
    </main>
  );
};

export default MyStudies;
