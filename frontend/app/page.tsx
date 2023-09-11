'use client'
import { useAccount, useEnsName } from 'wagmi'
import { DATA, DEFAULT_PROFILE_PICTURE } from '@/lib/mock';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { useRouter } from 'next/navigation'

export default function Home() {
  const router = useRouter();
  const { address, isConnecting, isDisconnected } = useAccount()
  const { data: ensName, isError, isLoading } = useEnsName({
    address,
  });

  const builderName = (item: { wallet: string, ens_name: string}) => {
    if (!item.wallet) return ("Buidler");
    if (!item.ens_name) return (item.wallet.slice(0, 5) + "..." + item.wallet.slice(-3));
    return item.ens_name;
  }

  const price = (item: { number_of_holders: number}) => (item.number_of_holders * 0.013).toFixed(3);

  if (isConnecting) return <h1 className="text-lg font-large leading-none p-8">Connecting...</h1>
  if (isDisconnected) return <h1 className="text-lg font-large leading-none p-8">Please connect your wallet to proceed</h1>

  return (
    <main className="py-4 px-2">
      <h2 className="text-lg font-medium leading-none mb-4 ml-2">Recommended</h2>
      {DATA.map((item) => 
        <div key={`home-${item.wallet}`} className="flex items-center justify-between w-full rounded-md p-2 transition-all hover:bg-accent hover:text-accent-foreground">
          <div className="space-x-4 flex items-center">
            <Avatar className="mt-px h-5 w-5">
              <AvatarImage src={item.profile_picture_url || DEFAULT_PROFILE_PICTURE} />
              <AvatarFallback>OM</AvatarFallback>
            </Avatar>
            <div className="space-y-1">
              <p className="text-sm font-medium leading-none">{builderName(item)}</p>
              <p className="text-sm text-muted-foreground">
                {item.number_of_holders} holders | {item.number_of_votes} Votes
              </p>
            </div>
          </div>
          <Button onClick={() => router.push(`/${item.wallet}`)}>Buy {price(item)} ETH</Button>
        </div>
      )}
    </main>
  )
}