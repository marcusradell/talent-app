import CvWrapper from "@/features/developer-profiles/components/cv/cv-wrapper";

type Props = {
  params: Promise<{ slug: string }>;
};

function Developer({ slug }: { slug: string }) {
  return <CvWrapper slug={slug} />;
}

export default async function Page({ params }: Props) {
  const { slug } = await params;

  return <Developer slug={slug} />;
}
