import CvWrapper from "@/features/developer-profiles/components/cv/cv-wrapper";

type Props = {
  params: Promise<{ slug: string }>;
};

export default async function Page({ params }: Props) {
  const { slug } = await params;

  return <CvWrapper slug={slug} />;
}
