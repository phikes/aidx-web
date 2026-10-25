import { Card } from "@/components/Card"
import { useQuery } from "@tanstack/react-query";
import { createRestAPIClient } from "masto";
import { FaMastodon, FaSpinner } from "react-icons/fa"
import { Status } from "masto/mastodon/entities/v1/index.js"

const ACCOUNT_ID = "114190157231039726"

export const Feed = () => {
  const { data, isLoading } = useQuery<Status[]>({
    queryFn: async () => {
      const masto = createRestAPIClient({
        url: "https://mastodon.social"
      })

     return await masto.v1.accounts.$select(ACCOUNT_ID).statuses.list({ limit: 9, onlyMedia: true })
    },
    queryKey: ["mastodonFeed"]
  })

  return <Card icon={FaMastodon} title="Mastodon Feed">
    {isLoading && <FaSpinner className="animate-spin" />}
    <div className="grid grid-cols-3 gap-3">
      {
        data?.map(({mediaAttachments, uri}) =>
          mediaAttachments.map(({ previewUrl, description }) =>
            <a href={uri} target="_blank" rel="noopener noreferrer">
              <img alt={description ?? ""} className="aspect-square rounded object-cover" key={previewUrl} src={previewUrl} />
            </a>
          )
        )
      }
    </div>
  </Card>
}
